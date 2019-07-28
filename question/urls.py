from rest_framework import routers
from .views import QuestionView
from django.urls import path
router = routers.DefaultRouter()
router.register('create', QuestionView)
urlpatterns = router.urls