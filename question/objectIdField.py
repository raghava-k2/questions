from bson import ObjectId
from rest_framework import serializers


class ObjectIdField(serializers.Field):
    """ Serializer field for Djongo ObjectID fields """

    def to_internal_value(self, data):
        # Serialized value -> Database value
        try:
            # Get the ID, then build an ObjectID instance using it
            return ObjectId(str(data))
        except Exception:
            raise serializers.ValidationError(
                '{} is not a valid ObjectID'.format(data))

    def to_representation(self, value):
        # Database value -> Serialized value
        # User submitted ID's might not be properly structured
        if not ObjectId.is_valid(value):
            raise serializers.ValidationError(
                '{} value is not an valid ObjectId', format(value))
        return str(value)
