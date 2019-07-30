from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import QuestionSerialize
from .models import Question


class QuestionView(viewsets.ModelViewSet):
    serializer_class = QuestionSerialize
    queryset = Question.objects.all()

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(
            Question.objects.values("_id", "title", "problem"))
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
