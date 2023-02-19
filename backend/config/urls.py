from django.urls import path, include
from django.contrib import admin
# Serializers define the API representation.


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("api.urls")),
    path('', include("leads.urls")),
]