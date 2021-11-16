from django.shortcuts import render, redirect
from models import *
from serializers.rendezVous_serializer import RendezVousSerialiazer


def addRendezVous(self, request):
    queryset = RendezVous.objects.all()
    serializer = RendezVousSerialiazer(queryset, many = True)
    context = {
        'serializer' : serializer
    }

    return render(request, 'accounts/addRendezVous.html', context)