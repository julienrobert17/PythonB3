from django.db import models
from common.models import Base
from utilisateurs.models import Utilisateur
from sports.models import Sport

class RendezVous(Base):
    name = models.CharField(max_length=80, null=True)
    lieu = models.CharField(max_length=150, null=True)
    heureDebut = models.DateTimeField(null = True)
    heureFin = models.DateTimeField(null = True)
    createur = models.ForeignKey(Utilisateur, null = True, related_name="utilisateurs", on_delete=models.CASCADE)
    sport = models.ForeignKey(Sport, null = True, related_name="utilisateurs", on_delete=models.CASCADE)

    def __str__(self):
        return self.name
