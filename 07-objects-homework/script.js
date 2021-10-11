const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

// 1 
function getSubjects(student){
  if(!student) return "There is no such student";
  return Object.keys(student.subjects)
  .map((subject) => subject[0].toUpperCase() 
      + subject.substring(1).toLowerCase()
      .replace("_", " "));
}

// 2 
function getAverageMark(student){
    if(!student) return "There is no such student";
    const mark = Object.values(student.subjects);
    const allMarks = mark.reduce((acc, item) => acc.concat(item));
    const averageMark = allMarks.reduce((acc, item) => (acc + item)) / allMarks.length;
    return +averageMark.toFixed(2);
}

// 3 
function getStudentInfo(student){
    if(!student) return "There is no such student";
    return Object.assign({name: student.name, course: student.course, averageMark: getAverageMark(student)});
}

// 4 
const getStudentsNames = (students) => students.map((student) => student.name).sort();

// 5 
function getBestStudent(students){
    /*
    const studentsMarks = students.map((mark) => getAverageMark(mark));
    const studentIndex = studentsMarks.indexOf(Math.max(...studentsMarks));
    
    return students[studentIndex].name;
    */

    let studentName = students.reduce((acc, student) => {
        return getAverageMark(acc) > getAverageMark(student) ?
        acc : student;
    });
    return studentName.name;
}

// 6 
function calculateWordLetters(word){
    /*
    const countLetters = {};
    const array = word.split("");
    array.forEach(letter => {
        if(!countLetters[letter]){
            countLetters[letter] = 1;
        } else {
            countLetters[letter] += 1;
        }
    });
    return countLetters;
    */

    // better solution
    return word.split('').reduce((acc, item) => {
        if(acc[item]){
          acc[item]++;
        } else {
          acc[item] = 1;
        }
        return acc;
    }, {});
}
  
console.log("List of subjects for a particular student:");
console.log(getSubjects(students[0]));
console.log("Average mark for a particular student:");
console.log(getAverageMark(students[0]));
console.log("Information about a particular student:");
console.log(getStudentInfo(students[0]));
console.log("Names of students in alphabetical order:")
console.log(getStudentsNames(students));
console.log("Best student:");
console.log(getBestStudent(students));
console.log("Calculates the number of letters in a word:");
console.log(calculateWordLetters("test"));