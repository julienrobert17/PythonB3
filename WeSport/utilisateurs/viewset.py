from rest_framework import viewsets
from utilisateurs.models import Utilisateur
from utilisateurs.serializers.utilisateur_serializer import UtilisateurSerialiazer
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK

class UtilisateurViewset(viewsets.ViewSet):
    def list(self, request):
        queryset = Utilisateur.objects.all() #Plusieurs action , get, create, filter(owner="hugo") par exemple
        serializer = UtilisateurSerialiazer(queryset, many=True) #many si réponse multiple

        return Response(serializer.data, status = HTTP_200_OK)

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass
