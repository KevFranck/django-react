#from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import StudentSerializer
from django.http.response import JsonResponse
from .models import Student
from django.http.response import Http404
from rest_framework.response import Response

# Create your views here.
class StudentView(APIView):
    def post(self, request):
        data = request.data
        serializer = StudentSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse('créé avec succès', safe=False)
        return JsonResponse('echec de creation', safe=False)
    
    def get_student(self, pk):
        try:
            student = Student.objects.get(student_id=pk)
            return student
        except Student.DoesNotExist():
            raise Http404

    
    def get(self, request, pk=None):
        if pk:
            data = self.get_student(pk)
            serializer = StudentSerializer(data)
        else:
            data = Student.objects.all()
            serializer = StudentSerializer(data, many=True)
        return Response(serializer.data)
    
    def put(self, request, pk=None):
        student_to_update = Student.objects.get(student_id=pk)
        serializer = StudentSerializer(instance=student_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Mise à jour réussie', safe=False)
        return JsonResponse('Echec de mise à jour')
    
    def delete(self, request, pk=None):
        student_to_delete = Student.objects.get(student_id=pk)
        student_to_delete.delete()
        return JsonResponse('Supprimé avec succès',safe=True)
