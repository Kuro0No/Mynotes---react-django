from math import fabs
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer

# Create your views here.
from django.http import JsonResponse

@api_view(['GET'])
def getRoutes(requets):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes )


@api_view(['GET'])
def getNotes(requets):
    notes = Note.objects.all().order_by("-updated")
    serializer = NoteSerializer(notes,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getNote(requets,pk):
    notes = Note.objects.get(id=pk)
    serializer = NoteSerializer(notes,many=False)
    return Response(serializer.data)


@api_view(['POST'])
def createNote(requets):
    data = requets.data
    note = Note.objects.create(
        body= data['body'],
        nameNote= data['name'],
    )
    serializer = NoteSerializer(note,many=False)

    return Response(serializer.data)

@api_view(['PUT'])
def updateNote(requets,pk):
    data = requets.data
    note = Note.objects.get(id=pk)

    serializer = NoteSerializer(instance=note,data=data)
    if serializer.is_valid():     
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def deleteNote(requets,pk):
    note = Note.objects.get(id=pk)

    note.delete()
    

    return Response("Note was deleted")

