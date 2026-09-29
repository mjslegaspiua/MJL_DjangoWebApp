from django.http import JsonResponse
from .models import Student

def student_list_api(request):
    if not request.user.is_authenticated:
        return JsonResponse({'error': 'Authentication required.'}, status=401)
    
    students = Student.objects.all()
    student_data = []
    for student in students:
        student_data.append({
            'id': student.id,
            'student_name': str(student),
            'program': getattr(student, 'program', ''),
            'year_level': getattr(student, 'year_level', ''),
            'email': getattr(student, 'email', ''),
        })
        
    return JsonResponse({
        'count': len(student_data),
        'students': student_data
    })