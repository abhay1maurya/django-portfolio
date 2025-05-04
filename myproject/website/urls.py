from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('form/', views.student_form_view, name='student_form'),
    path('edit-about/', views.edit_about, name='edit_about'),
    # Add more URL patterns
]