from rest_framework import viewsets
from .serializers import UserSerializer, UserDetailsSerialize
from .models import UserDetails
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class UserDetailsView(viewsets.ModelViewSet):
    serializer_class = UserDetailsSerialize
    queryset = UserDetails.objects.all()


@api_view(['POST'])
def userLogin(req):
    try:
        User.objects.get(username=req.data['username'])
        user = authenticate(
            request, username=req.data['username'], password=req.data['password'])
        if user is not None:
            login(request, user)
        else:
            raise Exception('Passowrd doesnt match')
    except User.DoesNotExist as e:
        print('Exceptoin while retriving the data', e)
        return Response(status=401, data='UserName doesNot Exists')
    except Exception as e:
        return Response(status=401, data='UserName or Password is incorrect')
    else:
        return Response(status=200, data='success')
