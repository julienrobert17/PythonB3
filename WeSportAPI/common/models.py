from django.db import models

class Base(models.Model):
    createdDate = models.DateTimeField(auto_now_add=True)
    updateDate = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True