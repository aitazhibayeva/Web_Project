from django.urls import path, include, re_path, reverse_lazy
from . import views
from django.urls import path
from .views import CategoryListAPIView, CategoryDetailAPIView, ProductListAPIView, ProductDetailAPIView, ProductsByCategoryAPIView
from django.views.generic.base import RedirectView
from rest_framework.routers import DefaultRouter
from users.views import UserViewSet, UserLogIn, UserSignUpAPIView
router = DefaultRouter()
router.register(r'users', UserViewSet)
urlpatterns = [
    path('categories/', CategoryListAPIView.as_view(), name='category-list'),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<int:category_id>/products/', ProductsByCategoryAPIView.as_view(), name='products-by-category'),
    path('products/', ProductListAPIView.as_view(), name='product-list'),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view(), name='product-detail'),
    path('api-user-login/', UserLogIn.as_view()),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    re_path(r'^$', RedirectView.as_view(url=reverse_lazy('api-root'), permanent=False)),
    path('sign-up/', UserSignUpAPIView.as_view(), name='user-sign-up'),
    # path('posts/', post_list)
]