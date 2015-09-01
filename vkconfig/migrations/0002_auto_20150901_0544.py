# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('vkconfig', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='playlist',
            name='id',
            field=models.AutoField(serialize=False, verbose_name=b'#', primary_key=True),
            preserve_default=True,
        ),
    ]
