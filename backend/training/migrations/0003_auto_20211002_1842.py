# Generated by Django 3.2.7 on 2021-10-02 13:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('training', '0002_alter_trainings_thumbnail'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='trainings',
            name='thumbnail',
        ),
        migrations.AddField(
            model_name='trainings',
            name='thumbnail_url',
            field=models.TextField(default='https://akm-img-a-in.tosshub.com/indiatoday/images/story/201811/online-3412473_1920_1.jpeg?tz.RfsTe_UTLHiDqxmpG7PY_nTIBjwF7'),
        ),
    ]
