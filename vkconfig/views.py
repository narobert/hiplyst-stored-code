from django.shortcuts import render, render_to_response
from django.http import HttpResponseRedirect, HttpResponse
from django import forms
from django.contrib.auth.models import User
from annoying.decorators import ajax_request
from vkconfig.forms import NewPlaylist
from vkconfig.models import Track, Playlist
import simplejson as json

# Create your views here.
def dashboard(request):
    return render_to_response("dashboard.html");

def new_playlist(request):
    if request.method == 'POST':
        form = NewPlaylist(request.POST)
        if form.is_valid():
            playlist_name = form.cleaned_data['playlist_name']
            playlist_create = Playlist.objects.create(user = request.user, playlist_name = playlist_name, num_songs = 0, total_duration = 0)
            playlist_create.save()
            return HttpResponseRedirect('/')
    else:
        form = NewPlaylist()
    return render_to_response("error.html", {"form": form})

@ajax_request
def getMenuPlaylists(request):
    playlists = Playlist.objects.filter(user = request.user).order_by("-id")
    menu_playlists = [pl.for_json() for pl in playlists]

    return {"status": "OK", "menu_playlists": menu_playlists}

def add_track(request):
    track_url = track_aid = track_title = track_artist = track_duration = track_genre = ''
    if request.method == 'POST':
        playlist_id = request.POST.get('playlist_id')
        track_url = request.POST.get('track_url')
        track_aid = request.POST.get('track_aid')
        track_title = request.POST.get('track_title')
        track_artist = request.POST.get('track_artist')
        track_duration = request.POST.get('track_duration')
        track_genre = request.POST.get('track_genre')
        track = Track.objects.create(url = track_url, aid = track_aid, title = track_title, artist = track_artist, duration = track_duration, genre = track_genre)
        playlist = Playlist.objects.get(id = playlist_id)
        playlist.track.add(track)
        playlist.save()
    return HttpResponseRedirect('/')

