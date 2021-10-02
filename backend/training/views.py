from django.shortcuts import render
from rest_framework import generics
from training.serializers import TrainingsSerializer , Trainings
# Create your views here.
class TrainingList(generics.ListAPIView):
    serializer_class  = TrainingsSerializer
    queryset = Trainings.objects.all()