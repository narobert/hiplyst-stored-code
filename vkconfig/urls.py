from django.conf.urls import patterns, include, url

urlpatterns = patterns(

    'vkconfig.views',

    (r'getMenuPlaylists$', 'getMenuPlaylists'),

)
