from django.db import models
from common.models import Base

class Sport(Base):
    name = models.CharField(max_length=80, null=True)
    minJoueur = models.PositiveIntegerField(null=True)

    def __str__(self):
        return self.name

