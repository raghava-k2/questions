from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserDetails


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user


class UserDetailsSerialize(serializers.ModelSerializer):
    class Meta:
        model = UserDetails
        fields = ('gender', 'date_of_birth')
