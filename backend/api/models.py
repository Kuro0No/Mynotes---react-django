from unicodedata import name
from django.db import models

# Create your models here.

class Note(models.Model):
    nameNote = models.CharField(null=True, blank=False, max_length=50)
    body = models.TextField(null=True,blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    img =  models.ImageField(null=True, upload_to='img')

    def __str__(self) :
        return f'{self.body[0:50]}, {self.nameNote}'
