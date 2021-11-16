from rest_framework import viewsets
from sports.models import Sport
from sports.serializers.sport_serializer import SportSerialiazer, CreateSportSerialiazer
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK

class SportViewset(viewsets.ViewSet):
    def list(self, request):
        queryset = Sport.objects.all() #Plusieurs action , get, create, filter(owner="hugo") par exemple
        serializer = SportSerialiazer(queryset, many=True) #many si réponse multiple

        return Response(serializer.data, status = HTTP_200_OK)

    def create(self, request):
        serializer = CreateSportSerialiazer(data=request.data)
        if serializer.is_valid():
            Sport.objects.create(
                name = serializer.validated_data["name"],
                #minJoueur = serializer.validated_data["minJoueur"],
            )

            return Response(status=HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        queryset = Sport.objects.get(pk=pk)
        serializer = serializers.ProductReponseSerializer(queryset)

        return Response(serializer.data, status=HTTP_200_OK)

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass
