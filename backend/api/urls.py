from django.urls import path, include
from rest_framework import routers

from api.views import index

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
urlpatterns = [
    path('', index, name='home'),
    path('v1', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
