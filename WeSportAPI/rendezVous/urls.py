from rest_framework import routers
from . import viewset


router = routers.DefaultRouter()

router.register("", viewset.RendezVousViewset, basename="rendezVous")
urlpatterns = router.urls
