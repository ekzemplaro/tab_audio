from django.shortcuts import render

from datetime import datetime

from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.decorators import login_required


def index(request):
    message = ""
    message += 'city からのメッセージです。<br />'
    message += str(request.user.id) + '&nbsp;&nbsp;'
    message += request.user.username + '<p />'
    params = {
        'hour': datetime.now().hour,
        'minute': datetime.now().minute,
        'message': message,
    }
    return render(request, 'tag_audio/audio.html', params)

