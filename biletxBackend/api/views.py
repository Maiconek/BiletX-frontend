from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import EventSerializer
from events.models import Event

@api_view(['GET'])
def getEvents(request):
    events = Event.objects.all()
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)