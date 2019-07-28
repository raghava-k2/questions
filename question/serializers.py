from rest_framework import serializers
from .models import Question
from collections import OrderedDict
from rest_framework.fields import SkipField
from rest_framework.relations import PKOnlyObject
from bson import ObjectId


class QuestionSerialize(serializers.ModelSerializer):
    def to_representation(self, instance):
        """
        Object instance -> Dict of primitive datatypes.
        """
        ret = OrderedDict()
        fields = self._readable_fields

        for field in fields:
            try:
                attribute = field.get_attribute(instance)
            except SkipField:
                continue

            # We skip `to_representation` for `None` values so that fields do
            # not have to explicitly deal with that case.
            #
            # For related fields with `use_pk_only_optimization` we need to
            # resolve the pk value.
            check_for_none = attribute.pk if isinstance(
                attribute, PKOnlyObject) else attribute
            if check_for_none is None:
                ret[field.field_name] = None
            elif isinstance(attribute, ObjectId):
                print('inside serialization', instance, '---', attribute, '-----',
                      attribute.__class__, '----', isinstance(attribute, ObjectId))
                ret[field.field_name] = str(attribute)
            else:
                ret[field.field_name] = field.to_representation(attribute)

        return ret

    class Meta:
        model = Question
        fields = ('id', 'title', 'problem', 'code', 'expected')
