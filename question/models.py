from django.db import models
from djongo.models import ObjectIdField


class Question(models.Model):
    _id = ObjectIdField(primary_key=True)
    title = models.TextField(max_length=1000)
    problem = models.TextField(max_length=100000)
    code = models.TextField(max_length=100000000, blank=True)
    expected = models.TextField(max_length=100000, blank=True)

    def __str__(self):
        return '_id :{}'.format(self._id)

    class Meta:
        db_table = 'questions'
