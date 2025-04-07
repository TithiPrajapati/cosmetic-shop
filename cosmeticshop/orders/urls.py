# orders/urls.py
from django.urls import path
from .views import *

urlpatterns = [
    # path('register/', register, name='register'),
    # path('login/', login_view, name='login'),
    # path('logout/', logout_view, name='logout'),
    path('wishlist/', WishlistView.as_view(), name='wishlist'),  # For GET and POST
    path('wishlist/<int:product_id>/', WishlistView.as_view(), name='wishlist_item'),  # For DELETE
]
