from django.contrib import admin
from django.urls import path ,include
from .views import TrainingList
urlpatterns = [
    path('' , TrainingList.as_view() , name = "Trainings")
]
