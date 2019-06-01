from rest_framework import viewsets
from .serializers import UserSerializer, UserDetailsSerialize
from .models import UserDetails
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
import datetime
import logging
import collections

logger = logging.getLogger(__name__)


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class UserDetailsView(viewsets.ModelViewSet):
    serializer_class = UserDetailsSerialize
    queryset = UserDetails.objects.all()


class User_View(APIView):
    authentication_classes = (SessionAuthentication, BasicAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, req):
        userObj = User.objects.get(username=req.user.__str__())
        userDetailsObj = UserDetails.objects.get(user=userObj)
        responseData = collections.OrderedDict()
        responseData['email'] = userObj.email
        responseData['dateOfBirth'] = userDetailsObj.date_of_birth
        responseData['gender'] = userDetailsObj.gender
        return Response(status=200, data=responseData)

    def put(self, req):
        userObj = User.objects.get(username=req.user.__str__())
        userDetailsObj = UserDetails.objects.get(user=userObj)
        userObj.email = req.data['email']
        userDetailsObj.date_of_birth = datetime.datetime.strptime(
            req.data['dateOfBirth'], '%Y-%m-%dT%H:%M:%S.%fZ').date()
        userDetailsObj.gender = req.data['gender']
        userDetailsObj.updated_date = datetime.datetime.now()
        userObj.save()
        userDetailsObj.save()
        return Response(status=200, data="Successfully updated user profile.")


@api_view(['POST'])
@permission_classes((AllowAny,))
def userLogin(req):
    try:
        User.objects.get(username=req.data['username'])
        user = authenticate(
            req, username=req.data['username'], password=req.data['password'])
        if user is not None:
            login(req, user)
        else:
            raise Exception('Passowrd doesnt match')
    except User.DoesNotExist as e:
        print('Exceptoin while retriving the data', e)
        return Response(status=401, data='UserName doesNot Exists')
    except Exception as e:
        return Response(status=401, data='UserName or Password is incorrect')
    else:
        return Response(status=200, data='success')


@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def userLogout(req):
    try:
        logout(req)
    except Exception as e:
        logger.error("error logging out the user : %s", e, exc_info=1)
        return Response(status=500, data='Unable to Logout the user')
    else:
        return Response(status=200)


@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def isUserActive(req):
    return Response(status=200, data=req.user.__str__())


@api_view(['POST'])
@permission_classes((AllowAny,))
def registerUser(req):
    logger.info('Registration data : {}'.format(req.data))
    user = None
    try:
        if checkForUsername(req.data['username']):
            raise Exception('Username already exists')
        userObj = req.data.copy()
        del userObj['gender']
        del userObj['dateOfBirth']
        user = UserSerializer(data=userObj).create(userObj)
        UserDetailsSerialize().create(
            {'user': user, 'gender': req.data['gender'], 'date_of_birth': datetime.datetime.strptime(req.data['dateOfBirth'], '%Y-%m-%dT%H:%M:%S.%fZ').date()})
    except Exception as e:
        logger.error('Exception while creating the user: %s', e, exc_info=1)
        if user is not None:
            user.delete()
        return Response(status=500, data=e.__str__())
    else:
        return Response(status=200)


def checkForUsername(username):
    try:
        User.objects.get(username=username)
    except User.DoesNotExist:
        return False
    else:
        return True
