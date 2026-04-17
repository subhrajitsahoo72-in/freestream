from django.shortcuts import render,redirect
from .models import Profile
import random

# Create your views here.
def uplode(request):
    if request.method == 'POST':
        image = request.FILES.get('profile_pic')
        video = request.FILES.get('video')
        username = request.POST.get('name')

        Profile.objects.create(
            username=username,
            profile_pic=image,
            video=video
        )
        return redirect('home')
    return render(request,'uplode.html')

def home(request):
    data = Profile.objects.all()
    all = []
    for i in data:
        all.append(i)
    random.shuffle(all)
    context = {"all":all}
    return render(request,'home.html',context)