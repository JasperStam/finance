# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-17 19:46
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_auto_20171014_1304'),
    ]

    operations = [
        migrations.RenameField(
            model_name='transaction',
            old_name='description',
            new_name='summary',
        ),
    ]