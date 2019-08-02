from rest_framework import serializers
from .models import Question, Comments
from .objectIdField import ObjectIdField


class CommnetsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ('_id', 'body')


class QuestionSerialize(serializers.ModelSerializer):
    _id = ObjectIdField(read_only=True)
    comments = CommnetsSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = '__all__'
