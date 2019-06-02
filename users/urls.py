from rest_framework import routers
from .views import UserView, UserDetailsView, userLogin, userLogout, registerUser, isUserActive, User_View, userPasswordChange
from django.urls import path
router = routers.DefaultRouter()
router.register('user_model', UserView)
router.register('user_details_model', UserDetailsView)
urlpatterns = router.urls
urlpatterns.append(path('auth/', userLogin))
urlpatterns.append(path('logout/', userLogout))
urlpatterns.append(path('register/', registerUser))
urlpatterns.append(path('isactive/', isUserActive))
urlpatterns.append(path('user/', User_View.as_view()))
urlpatterns.append(path('chng/', userPasswordChange))
