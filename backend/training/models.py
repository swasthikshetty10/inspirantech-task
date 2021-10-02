from django.db import models

# Create your models here.
class Trainings(models.Model):
    course_name  = models.TextField()
    price = models.CharField(max_length=50)
    thumbnail_url =  models.TextField(default= "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201811/online-3412473_1920_1.jpeg?tz.RfsTe_UTLHiDqxmpG7PY_nTIBjwF7")
    date = models.DateTimeField(auto_now=True)
