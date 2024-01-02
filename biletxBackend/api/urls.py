from django.urls import path
from . import views

urlpatterns = [
    path('events/', views.getEvents),
    path('event/<str:pk>/', views.getSingleEvent),
    path('events/create/', views.createEvent),
    path('events/delete/<str:pk>', views.deleteEvent)
]