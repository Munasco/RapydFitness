# Generated by Django 4.0.6 on 2022-07-26 03:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='default',
            field=models.BooleanField(blank=True, default=False),
        ),
        migrations.AlterField(
            model_name='address',
            name='save_info',
            field=models.BooleanField(blank=True, default=False),
        ),
        migrations.AlterField(
            model_name='address',
            name='use_default',
            field=models.BooleanField(blank=True, default=False),
        ),
        migrations.AlterField(
            model_name='coupon',
            name='amount',
            field=models.FloatField(),
        ),
    ]
