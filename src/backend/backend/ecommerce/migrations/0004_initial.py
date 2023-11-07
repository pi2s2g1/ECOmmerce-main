# Generated by Django 4.2.5 on 2023-11-07 16:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('ecommerce', '0003_delete_ecommerceuser'),
    ]

    operations = [
        migrations.CreateModel(
            name='EcommerceUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome_e_sobrenome', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=50)),
                ('login_name', models.CharField(max_length=20)),
                ('token', models.CharField(max_length=500)),
            ],
        ),
    ]