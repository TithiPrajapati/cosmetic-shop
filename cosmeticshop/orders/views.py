# orders/views.py
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Wishlist
from products.models import Product
from .serializers import WishlistSerializer

class WishlistView(APIView):
    def get(self, request):
        # Ensure the user is authenticated
        if request.user.is_authenticated:
            wishlist = Wishlist.objects.filter(user=request.user)
            serializer = WishlistSerializer(wishlist, many=True)
            return Response(serializer.data)
        return Response({'message': 'Authentication required.'}, status=status.HTTP_401_UNAUTHORIZED)

    def post(self, request):
        product_id = request.data.get('product_id')
        product = get_object_or_404(Product, id=product_id)
        wishlist_item, created = Wishlist.objects.get_or_create(user=request.user, product=product)
        if created:
            return Response({'message': 'Added to wishlist'}, status=status.HTTP_201_CREATED)
        return Response({'message': 'Already in wishlist'}, status=status.HTTP_200_OK)

    def delete(self, request, product_id):
        wishlist_item = get_object_or_404(Wishlist, user=request.user, product_id=product_id)
        wishlist_item.delete()
        return Response({'message': 'Removed from wishlist'}, status=status.HTTP_204_NO_CONTENT)
