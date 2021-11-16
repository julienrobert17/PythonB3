from django.db import models
from common.models import Base

class Utilisateur(Base):
    name = models.CharField(max_length=80, null=True)
    firstName = models.CharField(max_length=80, null=True)
    

    def __str__(self):
        return self.name

