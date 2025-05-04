from django.shortcuts import render
import hashlib

from .forms import StudentForm
from .models import Student


# Home view
from django.shortcuts import render, redirect
from .models import AboutMe
from django.contrib.auth.decorators import login_required, user_passes_test
from .forms import AboutMeForm

def home(request):
    about = AboutMe.objects.first()
    return render(request, 'website/index.html', {'about': about})

def is_admin(user):
    return user.is_superuser

@user_passes_test(is_admin)
def edit_about(request):
    about = AboutMe.objects.first()
    if request.method == 'POST':
        form = AboutMeForm(request.POST, request.FILES, instance=about)
        if form.is_valid():
            form.save()
            return redirect('home')  # or wherever your home page is
    else:
        form = AboutMeForm(instance=about)
    return render(request, 'website/edit_about.html', {'form': form})

# Student form view
def student_form_view(request):
    hash_value = None
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            data = form.cleaned_data
            # Generate a unique hash code from form data
            combined = f"{data['name']}{data['branch']}{data['semester']}{data['email']}"
            hash_code = hashlib.sha256(combined.encode()).hexdigest()
            
            # Save the student data with the hash
            student = form.save(commit=False)
            student.hash_code = hash_code
            student.save()

            return render(request, 'website/thanku.html', {'hash': hash_code})
    else:
        form = StudentForm()
    return render(request, 'website/form.html', {'form': form})
