from rest_framework import serializers
from .models import Question
from .objectIdField import ObjectIdField


class QuestionSerialize(serializers.ModelSerializer):
    _id = ObjectIdField(read_only=True)

    class Meta:
        model = Question
        fields = '__all__'
