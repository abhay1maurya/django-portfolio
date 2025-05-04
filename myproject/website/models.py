from django.db import models

# Create your models here.


class Student(models.Model):
    name = models.CharField(max_length=100)
    branch = models.CharField(max_length=100)
    semester = models.IntegerField()
    email = models.EmailField(unique=True)
    hash_code = models.CharField(max_length=64, unique=True)

    def __str__(self):
        return f"{self.name} ({self.email})"

class AboutMe(models.Model):
    title = models.CharField(max_length=100, default='About Me')
    heading = models.CharField(max_length=200)
    quote = models.TextField()
    description = models.TextField()
    resume = models.URLField(max_length=500, null=True, blank=True) 

    def __str__(self):
        return self.title