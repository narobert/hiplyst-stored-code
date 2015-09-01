from django.conf.urls import patterns, include, url
from django.conf.urls.static import static
from django.conf import settings

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',

    url(r'^$', 'vkconfig.views.dashboard', name='dashboard'),
    url(r'^new_playlist/', 'vkconfig.views.new_playlist', name='new_playlist'),

    # Everything in this site is going to be presented using only ajax
    (r'^ajax/vkconfig/', include('vkconfig.urls')),

    # Quick access to models, eventually create database
    url(r'^admin/', include(admin.site.urls)),

) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
