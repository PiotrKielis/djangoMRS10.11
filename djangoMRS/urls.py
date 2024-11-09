# C:\Users\Piotr\PycharmProjects\djangoMRS\djangoMRS\urls.py
from django.contrib import admin
from django.urls import path, include
from MRS.views import login_view  # Dodaj ten import dla login_view
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('MRS.urls')),
    path('api/login/', login_view, name='login'),  # Upewnij się, że ścieżka jest poprawna
    path('', TemplateView.as_view(template_name='index.html'), name='home'),
]
