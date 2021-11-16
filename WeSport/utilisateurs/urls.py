from rest_framework import routers
from . import viewset


router = routers.DefaultRouter()

router.register("", viewset.UtilisateurViewset, basename="utilisateurs")
urlpatterns = router.urls
