import axios from "axios";


export function getStudents(){
    return axios.get('http://127.0.0.1:8000/students/')
        .then(response => response.data)
}

export function AddStudent(student){
    return axios.post('http://127.0.0.1:8000/students/' , {
        student_id:null,
        first_name:student.first_name.value,
        last_name:student.last_name.value,
        registration_number:student.registration_number.value,
        email:student.email.value,
        course:student.course.value
    })
    .then(response => response.data)
}

export function updateStudent(stuId, student){
    return axios.put('http://127.0.0.1:8000/students/' + stuId + '/' , {
        first_name:student.first_name.value,
        last_name:student.last_name.value,
        registration_number:student.registration_number.value,
        email:student.email.value,
        course:student.course.value
    })
    .then(response => response.data)
}

export function deleteStudent(student_id){
    return axios.delete('http://127.0.0.1:8000/students/' + student_id + '/',
    {
        method: 'DELETE',
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json',
        }
    })
        .then(response => response.data)
}