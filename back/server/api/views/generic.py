from rest_framework import generics
from ..models import Category, Product
from ..serializers import CategorySerializer, ProductSerializer
class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
class ProductByCategory(generics.ListAPIView):
    serializer_class=ProductSerializer
    def get_queryset(self):
        try:
            category = Category.objects.get(id=self.kwargs['pk'])
            return Product.objects.filter(category=category)
        except Category.DoesNotExist as e:
            return Product.objects.none()