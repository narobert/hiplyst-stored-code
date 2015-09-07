# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Playlist',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name=b'#', primary_key=True)),
                ('playlist_name', models.CharField(max_length=100)),
                ('num_songs', models.IntegerField()),
                ('total_duration', models.IntegerField()),
                ('user', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Track',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('url', models.CharField(max_length=1000)),
                ('title', models.CharField(max_length=1000)),
                ('artist', models.CharField(max_length=1000)),
                ('genre', models.CharField(max_length=40)),
                ('duration', models.IntegerField()),
                ('aid', models.IntegerField()),
                ('playlist', models.ForeignKey(to='vkconfig.Playlist')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
