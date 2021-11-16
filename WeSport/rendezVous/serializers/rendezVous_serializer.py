from rest_framework import serializers
from rendezVous.models import RendezVous

class RendezVousSerialiazer(serializers.ModelSerializer):
    class Meta:
        model = RendezVous
        fields = serializers.ALL_FIELDS



class CreateRendezVousSerialiazer(serializers.Serializer):
    name = serializers.CharField(
        max_length=80, min_length=3, required=True, trim_whitespace=True
    )
    lieu = serializers.CharField(
        max_length=150, min_length=3, required=True, trim_whitespace=True
    )
    heureDebut = serializers.DateTimeField()
    heureFin = serializers.DateTimeField()