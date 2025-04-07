from django.shortcuts import render
from .serializers import *
from .models import *
from rest_framework.generics import ListAPIView
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.


class CategoryList(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class TagViewSet(ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class ProductViewSet(ListAPIView):
    queryset = Product.objects.all()
    # get tag name in a var
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category', 'product_price', 'product_rating']

    # tag name

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context.update({"request": self.request})
        return context


class BestsellersViewSet(ListAPIView):
    queryset = Product.objects.filter(category__category_name='Bestsellers')
    serializer_class = ProductSerializer


class MakeupViewSet(ListAPIView):
    queryset = Product.objects.filter(category__category_name='Makeup')
    serializer_class = ProductSerializer


class SkincareViewSet(ListAPIView):
    queryset = Product.objects.filter(category__category_name='Skincare')
    serializer_class = ProductSerializer


class PerfumesViewSet(ListAPIView):
    queryset = Product.objects.filter(category__category_name='Perfumes')
    serializer_class = ProductSerializer

class GiftSetViewSet(ListAPIView):
    queryset = Product.objects.filter(category__category_name='GiftSets')
    serializer_class = ProductSerializer


class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer
    lookup_field = 'product_id'  # Assuming your Product model has a 'product_id'

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context.update({"request": self.request})
        return context
