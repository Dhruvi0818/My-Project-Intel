from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def home(request):
    return render(request, 'home.html')

def checkup(request):
    return render(request, 'checkup.html')

def consult(request):
    return render(request, 'consult.html')

def Contact(request):
    return render(request, 'Contact.html')

def education(request):
    return render(request, 'education.html')

def Emergency(request):
    return render(request, 'Emergency.html')

def help(request):
    return render(request, 'help.html')

def labtest(request):
    return render(request, 'labtest.html')

def login(request):
    return render(request, 'login.html')

def medicine(request):
    return render(request, 'medicine.html')

def Records(request):
    return render(request, 'Records.html')

def Register(request):
    return render(request, 'Register.html')

def schemes(request):
    return render(request, 'schemes.html')

def Services(request):
    return render(request, 'Services.html')

def about(request):
    return render(request, 'about.html')
