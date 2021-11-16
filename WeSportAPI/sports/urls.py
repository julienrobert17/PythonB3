from rest_framework import routers
from . import viewset


router = routers.DefaultRouter()

router.register("", viewset.SportViewset, basename="sports")
urlpatterns = router.urls
