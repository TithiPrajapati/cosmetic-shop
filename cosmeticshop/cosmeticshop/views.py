# cosmeticshop/views.py (or create a new file for views)

from django.http import HttpResponse
from django.urls import path

def home(request):
    return HttpResponse("Welcome to the Cosmetic Shop!")

# Update your urls.py to include this view
