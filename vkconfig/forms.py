from django import forms

class NewPlaylist(forms.Form):
    playlist_name = forms.CharField(max_length = 100)
