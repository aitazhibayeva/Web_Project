from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings
from django.dispatch import receiver
from django.db.models.signals import post_save
from rest_framework.authtoken.models import Token
class Category(models.Model):
    name = models.CharField(max_length=250)
    img = models.CharField(max_length=250)
    def __str__(self):
        return self.name
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'image':self.img
        }
class Product(models.Model):
    STATUS = (
        ('free', 'not booked'),
        ('not free', 'booked')
    )
    name = models.CharField(max_length=250, default='')
    image = models.CharField(max_length=250)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
    status = models.CharField(max_length=250, default="free", choices=STATUS)
    price = models.FloatField()
    description = models.TextField()
    def __str__(self):
        return '%s (%s)' % (self.name, self.category)
    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'image': self.image,
            'category': self.category.name,
            'status': self.status,
            'description': self.description,
            'price': self.price
        }
class Users(AbstractUser):
    bio = models.TextField(blank=True)
    profile_pic = models.ImageField(blank=True)
    def __str__(self):
        return self.username
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class Bron(models.Model): 
    name = models.CharField(max_length=100) 
    phoneNumber = models.CharField(max_length=15) 
    date = models.DateField() 
    guestsCount = models.IntegerField() 
    wishes = models.TextField(blank=True) 
     
    class Meta: 
        verbose_name = 'Bron' 
        verbose_name_plural = 'Brons'