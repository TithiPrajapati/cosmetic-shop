from django.conf import settings
import os
from django.contrib import admin
from .models import Category, Tag, Product


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    # Displays these fields in admin list view
    list_display = ('id', 'category_name', 'category_description')
    # Adds search functionality by 'category_name'
    search_fields = ('category_name',)
    ordering = ('category_name',)  # Orders by 'category_name'


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    # Displays these fields in admin list view
    list_display = ('id', 'tag_name')
    search_fields = ('tag_name',)  # Adds search functionality by 'tag_name'
    ordering = ('tag_name',)  # Orders by 'tag_name'


def ensure_dir(file_path):
    directory = os.path.dirname(file_path)
    if not os.path.exists(directory):
        os.makedirs(directory)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_id', 'product_name', 'product_price',
                    'product_description')  # Customize fields shown in the list view
    # Adds search functionality by 'product_name'
    search_fields = ('product_name',)
    list_filter = ('product_price',)  # Adds a filter for product price
    ordering = ('product_name',)  # Orders by 'product_name'

    def save_model(self, request, obj, form, change):
        if obj.product_image:
            ensure_dir(os.path.join(settings.MEDIA_ROOT,
                       'products', obj.product_name))
        super().save_model(request, obj, form, change)
# Alternatively, you can use admin.site.register for simple model registration:
# admin.site.register(Category, CategoryAdmin)
# admin.site.register(Tag, TagAdmin)
# admin.site.register(Product, ProductAdmin)
