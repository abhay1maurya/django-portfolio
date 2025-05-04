from django import forms
from .models import Student

class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = ['name', 'branch', 'semester', 'email']
from .models import AboutMe

class AboutMeForm(forms.ModelForm):
    class Meta:
        model = AboutMe
        fields = '__all__'