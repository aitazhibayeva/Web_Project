from django.urls import path, include, re_path, reverse_lazy

from .views.views import create_booking
from . import views
from django.urls import path
from .views.cbv import CategoryListAPIView, CategoryDetailAPIView, ProductListAPIView, ProductDetailAPIView, ProductsByCategoryView
from django.views.generic.base import RedirectView
from rest_framework.routers import DefaultRouter
from api.views.cbv import UserViewSet, UserLogIn, UserSignUpAPIView
# router = DefaultRouter()
# router.register(r'users', UserViewSet)
urlpatterns = [
    path('categories/', CategoryListAPIView.as_view(), name='category-list'),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<int:category_id>/products/', ProductsByCategoryView.as_view(), name='products-by-category'),
    path('products/', ProductListAPIView.as_view(), name='product-list'),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view(), name='product-detail'),
    
    path('bron', create_booking, name='crate_booking')
]