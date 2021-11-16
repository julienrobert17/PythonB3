from rest_framework import serializers
from utilisateurs.models import Utilisateur

class UtilisateurSerialiazer(serializers.ModelSerializer):
    class Meta:
        model = Utilisateur
        fields = serializers.ALL_FIELDS