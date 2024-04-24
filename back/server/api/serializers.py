from django.contrib.auth.hashers import make_password
from .models import *
from rest_framework import serializers
from .models import Category, Product


class BookingSerializer(serializers.ModelSerializer): 
    date = serializers.DateField(format='%Y-%m-%d') 
    class Meta: 
        model = Bron 
        # fields=('__all__') 
        fields = ('name','phoneNumber','date','guestsCount','wishes')



class CategoryModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'image']
class ProductModelSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField(source='category.name')
    class Meta:
        model = Product
        fields = ['id', 'name', 'image', 'category', 'category_name', 'status', 'price', 'description']
class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=250)
    image = serializers.CharField(max_length=250)
    def create(self, validated_data):
        return Category.objects.create(**validated_data)
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.img = validated_data.get('image', instance.img)
        instance.save()
        return instance
class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=250)
    image = serializers.CharField(max_length=250)
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    status = serializers.ChoiceField(choices=Product.STATUS)
    price = serializers.FloatField()
    description = serializers.CharField()
    def create(self, validated_data):
        return Product.objects.create(**validated_data)
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.image = validated_data.get('image', instance.image)
        instance.category = validated_data.get('category', instance.category)
        instance.status = validated_data.get('status', instance.status)
        instance.price = validated_data.get('price', instance.price)
        instance.description = validated_data.get('description', instance.description)
        instance.save()
        return instance
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('id', 'username', 'first_name', 'last_name', 'bio', 'profile_pic', 'email')
        read_only_fields = ('username', )
class UserSignUpSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    class Meta:
        model = Users
        fields = ('username', 'email', 'password', 'password2', 'first_name', 'last_name')
        extra_kwargs = {
            'password': {'write_only': True}
        }
    def save(self):
        user = Users(
            email=self.validated_data['email'],
            username=self.validated_data['username'],
            first_name = self.validated_data['first_name'],
            last_name = self.validated_data['last_name']
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({'password': 'Passwords must match.'})
        user.set_password(password)
        user.save()
        return user