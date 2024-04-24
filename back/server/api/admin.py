from itertools import product
from unicodedata import category
from django.contrib import admin
from api.models import *
class UsersAdmin(admin.ModelAdmin):
    list_display = ('username', 'email',  'first_name', 'last_name', 'is_active')
admin.site.register(Users, UsersAdmin)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Bron)