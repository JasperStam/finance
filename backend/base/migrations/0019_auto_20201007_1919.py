# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2020-10-07 19:19
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0018_fix_transaction_fk'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='color',
            field=models.CharField(max_length=30),
        ),
    ]
