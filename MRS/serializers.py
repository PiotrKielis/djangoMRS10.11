from rest_framework import serializers
from .models import User, Movie, Rating, Ulubione

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name']

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ['id', 'title', 'genre']

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ['user', 'movie', 'rating']

class UlubioneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ulubione
        fields = ['user', 'movie']
