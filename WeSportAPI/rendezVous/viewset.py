from rest_framework import viewsets
from rendezVous.models import RendezVous
from rendezVous.serializers.rendezVous_serializer import RendezVousSerialiazer, CreateRendezVousSerialiazer
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_201_CREATED

class RendezVousViewset(viewsets.ViewSet):
    def list(self, request):
        queryset = RendezVous.objects.all()
        serializer = RendezVousSerialiazer(queryset, many = True)

        return Response(serializer.data, status = HTTP_200_OK)

    def create(self, request):
        serializer = CreateRendezVousSerialiazer(data=request.data)
        if serializer.is_valid():
            RendezVous.objects.create(
                name = serializer.validated_data["name"], 
                lieu = serializer.validated_data["lieu"], 
                heureDebut = serializer.validated_data["heureDebut"], 
                heureFin = serializer.validated_data["heureFin"],
            )

            return Response(status=HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        queryset = RendezVous.objects.get(pk=pk)
        serializer = RendezVousSerialiazer(queryset)

        return Response(serializer.data, status=HTTP_200_OK)