from django.db import models

# Create your models here.
class Trainings(models.Model):
    course_name  = models.TextField()
    price = models.CharField(max_length=50)
    thumbnail =  models.ImageField(upload_to='thumbnails')
    date = models.DateTimeField(auto_now=True)
