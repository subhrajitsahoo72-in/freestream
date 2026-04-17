from django.db import models

# Create your models here.

class Profile(models.Model):
    username = models.CharField(max_length=100)
    profile_pic = models.ImageField(upload_to='images/')
    video = models.FileField(upload_to='videos/', null=True, blank=True)