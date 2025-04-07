from django.db import models
from django.conf import settings  # Use this to refer to the custom user model
from products.models import Product

class Wishlist(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)  # Reference to AUTH_USER_MODEL
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    added_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'product')  # Ensures a user can't add the same product multiple times

    def __str__(self):
        return f"{self.user.username}'s wishlist item: {self.product.product_name}"
