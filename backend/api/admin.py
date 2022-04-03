from django.contrib import admin

from api.models import Note

# Register your models here.

class NoteAdmin(admin.ModelAdmin):
    list_display = ('nameNote', 'body', 'img')

admin.site.register(Note,NoteAdmin)