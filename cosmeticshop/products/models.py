from django.db import models


def product_image_path(instance, filename):
    return f'products/{instance.product_name}/{filename}'


class Category(models.Model):
    category_name = models.CharField(max_length=50, unique=True)
    category_description = models.TextField()

    def __str__(self):
        return self.category_name


class Tag(models.Model):
    tag_name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.tag_name


class Product(models.Model):
    product_id = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=100)
    product_price = models.DecimalField(max_digits=10, decimal_places=2)
    product_description = models.TextField()
    product_image = models.ImageField(
        upload_to='products/', blank=True, null=True)
    product_rating = models.FloatField(default=0, null=True, blank=True)
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, null=True, related_name='products')
    tags = models.ManyToManyField(Tag, blank=True, related_name='products')

    def __str__(self):
        return self.product_name
