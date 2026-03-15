interface Attendance{
    markAttendance():void;
}

class Student implements Attendance{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    markAttendance(): void {
        console.log(this.name+" is Present");
        
    }
}

const student = new Student("Harsh");
const student1 = new Student("Sagarika");
student.markAttendance();
student1.markAttendance();