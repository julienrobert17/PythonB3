from rest_framework import serializers
from sports.models import Sport

class SportSerialiazer(serializers.ModelSerializer):
    class Meta:
        model = Sport
        fields = serializers.ALL_FIELDS

class CreateSportSerialiazer(serializers.Serializer):
    name = serializers.CharField(
        max_length=80, min_length=3, required=True, trim_whitespace=True
    )
    #minJoueur = serializers.PositiveIntegerField(null=True)