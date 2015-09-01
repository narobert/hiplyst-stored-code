from django.db import models
from django.contrib.auth.models import User

class Track(models.Model):

    url = models.CharField(max_length = 1000)
    aid = models.IntegerField()
    title = models.CharField(max_length = 1000)
    artist = models.CharField(max_length = 1000)
    duration = models.IntegerField()
    genre = models.CharField(max_length = 40)


class Playlist(models.Model):

    user = models.ForeignKey(User)
    id = models.AutoField('#', primary_key = True)
    playlist_name = models.CharField(max_length = 100)
    track = models.ManyToManyField(Track, blank = True)
    num_songs = models.IntegerField()
    total_duration = models.IntegerField()

    def for_json(self):
        return {"name": self.playlist_name}
