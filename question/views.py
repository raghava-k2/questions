from rest_framework import viewsets
from .serializers import QuestionSerialize
from .models import Question


class QuestionView(viewsets.ModelViewSet):
    serializer_class = QuestionSerialize
    queryset = Question.objects.all()
