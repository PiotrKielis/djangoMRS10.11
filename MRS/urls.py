# C:\Users\Piotr\PycharmProjects\djangoMRS\MRS\urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, MovieViewSet, RatingViewSet, UlubioneViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'movies', MovieViewSet)
router.register(r'ratings', RatingViewSet)
router.register(r'ulubione', UlubioneViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
