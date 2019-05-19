from rest_framework import routers
from .views import UserView, UserDetailsView, userLogin, userLogout, registerUser
from django.urls import path
router = routers.DefaultRouter()
router.register('user', UserView)
router.register('user_details', UserDetailsView)
urlpatterns = router.urls
urlpatterns.append(path('auth/', userLogin))
urlpatterns.append(path('logout/', userLogout))
urlpatterns.append(path('register/', registerUser))
