abstract class Person{
    abstract getDetails():void;
    abstract getRole():void;
}

class Student extends Person{
    name:string;

    constructor(name:string){
        super();
        this.name=name;
    }
    
    
    getDetails(): void {
        console.log("Name:"+this.name);
        
    }

    getRole(): void {
        console.log("Student");
    }
}

class Teacher extends Person{
    name:string;

    constructor(name:string){
        super();
        this.name=name;
    }

    getDetails(): void {
        console.log("Name:"+this.name);
    }

    getRole(): void {
        console.log("Teacher");
    }
}

const person = new Student("Harsh");
const person1 = new Teacher("Sagarika");

person.getDetails();
person.getRole();

person1.getDetails();
person1.getRole();