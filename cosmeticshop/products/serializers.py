from rest_framework import serializers
from .models import Category, Product, Tag


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    # category = CategorySerializer(read_only=True)
    # tags = TagSerializer(many=True, read_only=True)
    category = serializers.CharField(source='category.category_name')

    class Meta:
        model = Product
        fields = '__all__'

    def get_product_image(self, obj):
        if obj.product_image:
            return self.context['request'].build_absolute_uri(obj.product_image.url)
        return None


class ProductDetailSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields ='__all__'
    def get_product_image(self, obj):
        if obj.product_image:
            return self.context['request'].build_absolute_uri(obj.product_image.url)
        return None
