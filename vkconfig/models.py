from django.db import models
from django.contrib.auth.models import User

class Playlist(models.Model):

    user = models.ForeignKey(User)
    id = models.AutoField('#', primary_key = True)
    playlist_name = models.CharField(max_length = 100)
    num_songs = models.IntegerField()
    total_duration = models.IntegerField()

    def for_json(self):
        return {"id": self.id, "name": self.playlist_name}


class Track(models.Model):

    playlist = models.ForeignKey(Playlist)
    url = models.CharField(max_length = 1000)
    title = models.CharField(max_length = 1000)
    artist = models.CharField(max_length = 1000)
    genre = models.CharField(max_length = 40)
    duration = models.IntegerField()
    aid = models.IntegerField()

    def for_json(self):
        return {"url": self.url, "aid": self.aid, "title": self.title, "artist": self.artist, "duration": self.duration, "genre": self.genre}

