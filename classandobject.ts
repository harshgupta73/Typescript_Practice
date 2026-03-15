class Course{
    courseName:string;
    courseCode:number;
    instructor:string;

    constructor(courseName:string,courseCode:number,instructor:string){
        this.courseName=courseName;
        this.courseCode=courseCode;
        this.instructor=instructor;


    }
}

const course= new Course("English",124,"Valsala");
console.log(course);
console.log(course.courseName);

