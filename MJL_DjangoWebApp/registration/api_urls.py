from django.urls import path
from . import api_views

urlpatterns = [
    path('students/', api_views.student_list_api, name='student_list_api'),
]