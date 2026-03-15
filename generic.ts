class Student{
    id:number;
    name:string;
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
}

class School{
    static totalStudents:number=0;

    studentlist:Student[]=[];

    addStudent(s:Student):void{
        this.studentlist.push(s)
        School.totalStudents++;
        console.log("Total Students:"+School.totalStudents);
        
    }
}

const student= new Student(1,"Harsh");
const student1 = new Student(2,"Sagarika")
const school = new School();
school.addStudent(student);
school.addStudent(student1);
console.log(school.studentlist);
