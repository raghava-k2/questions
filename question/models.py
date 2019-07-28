from django.db import models

class Question(models.Model):
    title = models.TextField(max_length=1000)
    problem = models.TextField(max_length=100000)
    code = models.TextField(max_length=100000000)
    expected = models.TextField(max_length=100000)

    class Meta:
        db_table = 'questions'
