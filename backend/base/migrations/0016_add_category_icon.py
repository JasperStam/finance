# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2020-03-02 21:20
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0015_auto_20200223_1541'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='icon',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]
