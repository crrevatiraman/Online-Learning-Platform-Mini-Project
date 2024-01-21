import axios from "axios";
export async function fetchStudents(){
    try {
        const response=await axios.get("http://127.0.0.1:4900/student");
        
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function saveStudent(studentData){
   
    try {
        const response=await axios.post("http://127.0.0.1:4900/student",studentData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export async function deleteStudent(Phone){
    try {
       const response = await axios.delete(`http://127.0.0.1:4900/student/${Phone}`);
       return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchStudentByPhone(Phone){
    try {
        const response = await axios.get(`http://127.0.0.1:4900/student/${Phone}`);
        return response.data;
     } catch (error) {
         console.log(error);
     }
}

export async function updateStudent(updatedData,Phone){
    try {
        const response = await axios.put(`http://127.0.0.1:4900/student/${Phone}`,updatedData);
        return response.data;
     } catch (error) {
         console.log(error);
     }
}
