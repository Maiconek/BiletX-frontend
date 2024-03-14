from django.urls import path, re_path
from . import views

urlpatterns = [
    path('events/', views.getEvents),
    path('event/<str:pk>/', views.getSingleEvent),
    path('events/create/', views.createEvent),
    path('events/delete/<str:pk>', views.deleteEvent),
    path('users/', views.getUsers),
    re_path('login', views.login),
    re_path('register', views.register),
    re_path('test-token', views.test_token)
]