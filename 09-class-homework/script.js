class Student{
    constructor(_university, _course, _fullName, _marks){
        this.university = _university;
        this.course = _course;
        this.fullName = _fullName;
        this.marks = _marks;
    }

    getInfo(){
        return `Student ${this.course}st course ${this.university}, ${this.fullName}`;
    }
    
    get getMarks(){
        if(this.isExpelled) return null;
        return this.marks;
    }
    
    set setMarks(newMark){
        if(this.isExpelled) return null;
        return this.marks.push(newMark);
    }

    getAverageMark(){
        return this.getMarks.reduce((acc, item) => acc + item)/this.getMarks.length;
    }

    dismiss(){
        this.isExpelled = true;
    }

    recover(){
        this.isExpelled = false;
    }
}

class BudgetStudent extends Student{
    constructor(_university, _course, _fullName, _marks, _scholarship){
        super(_university, _course, _fullName, _marks);
        this.scholarship = _scholarship;
        setInterval(() => {
            console.log(this.getScholarship());
        }, 30000);
    }
    
    getScholarship(){
        if(this.getMarks === null) return "You are dismissed";
        if(this.getAverageMark() >= 4){
            return `Ви отримали ${this.scholarship} грн. стипендії`;
        } else {
            return "Your average mark should be 4 or more.";
        }
    }
}

const student1 = new Student("Вищої Школи Психотерапії м.Одеса", 1, "Остап Родоманський", [5, 4, 4, 5]);

const student2 = new BudgetStudent("Вищої Школи Психотерапії м.Одеса", 3, "Остап Бендер", [5, 4, 4, 5], 1400);

console.log("Properties of student:");
console.log(student1);
console.log("Information about student:");
console.log(student1.getInfo());
console.log("Student marks:");
console.log(student1.marks);
console.log("Student new marks:");
student1.setMarks = 5;
console.log(student1.marks);
console.log("Student average mark:");
console.log(student1.getAverageMark());
console.log("Student is dismissed:");
student1.dismiss();
console.log("Trying to give a new mark to dismissed student:")
student1.setMarks = 3;
console.log(student1.getMarks);
console.log("Student is recovered:");
student1.recover();
student1.setMarks = 3;
console.log(student1.getMarks);

console.log("Properties of budget student:");
console.log(student2);
console.log("Does the student get a scholarship?:");
console.log(student2.getScholarship());
console.log("Student is dismissed:");
student2.dismiss();
console.log(student2.getScholarship());