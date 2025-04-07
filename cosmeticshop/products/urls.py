from django.urls import path
from . import views


urlpatterns = [
    path('categories/', views.CategoryList.as_view()),
    path('products/', views.ProductViewSet.as_view()),
    path('products/bestsellers/', views.BestsellersViewSet.as_view()),
    path('products/skincare/', views.SkincareViewSet.as_view()),
    path('products/perfumes/', views.PerfumesViewSet.as_view()),
    path('products/makeup/', views.MakeupViewSet.as_view()),
    path('products/giftsets/', views.GiftSetViewSet.as_view(), name='gift-sets'),
    path('products/<int:product_id>/',
         views.ProductDetailView.as_view(), name='product-detail'),
]

from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
