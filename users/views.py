from rest_framework import viewsets
from .serializers import UserSerializer, UserDetailsSerialize
from .models import UserDetails
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth import authenticate, login, logout
import datetime
import logging

logger = logging.getLogger(__name__)


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class UserDetailsView(viewsets.ModelViewSet):
    serializer_class = UserDetailsSerialize
    queryset = UserDetails.objects.all()


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
    return Response(status=200,data=req.user.__str__())


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
        return Response(status=500, data=e)
    else:
        return Response(status=200)


def checkForUsername(username):
    try:
        User.objects.get(username=username)
    except User.DoesNotExist:
        return False
    else:
        return True
