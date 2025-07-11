from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('home', views.home, name='home'),
    path('checkup', views.checkup, name='checkup'),
    path('consult', views.consult, name='consult'),
    path('Contact', views.Contact, name='Contact'),
    path('education', views.education, name='education'),
    path('Emergency', views.Emergency, name='Emergency'),
    path('help', views.help, name='help'),
    path('labtest', views.labtest, name='labtest'),
    path('login', views.login, name='login'),
    path('medicine', views.medicine, name='medicine'),
    path('Records', views.Records, name='Records'),
    path('Register', views.Register, name='Register'),
    path('schemes', views.schemes, name='schemes'),
    path('Services', views.Services, name='Services'),
    path('about', views.about, name='about'),
]
