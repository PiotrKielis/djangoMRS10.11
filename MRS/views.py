from rest_framework import viewsets
from .models import User, Movie, Rating, Ulubione
from .serializers import UserSerializer, MovieSerializer, RatingSerializer, UlubioneSerializer

# C:\Users\Piotr\PycharmProjects\djangoMRS\MRS\views.py

from rest_framework.decorators import api_view  # Dodaj ten import
from rest_framework.response import Response  # Dodaj ten import
from rest_framework import status  # Dodaj ten import
from django.contrib.auth import authenticate  # Dodaj ten import
from django.http import JsonResponse
from rest_framework import viewsets, filters
from .models import User, Movie, Rating, Ulubione
from .serializers import UserSerializer, MovieSerializer, RatingSerializer, UlubioneSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'genre']


class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer


class UlubioneViewSet(viewsets.ModelViewSet):
    queryset = Ulubione.objects.all()
    serializer_class = UlubioneSerializer


@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    if user is not None:
        return Response({'status': 'success', 'username': username})
    else:
        return Response({'status': 'error', 'message': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)


def movie_list(request):
    movies = list(Movie.objects.values())
    return JsonResponse(movies, safe=False)