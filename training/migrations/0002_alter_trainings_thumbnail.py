# Generated by Django 3.2.7 on 2021-10-02 12:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('training', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trainings',
            name='thumbnail',
            field=models.ImageField(upload_to='thumbnails'),
        ),
    ]