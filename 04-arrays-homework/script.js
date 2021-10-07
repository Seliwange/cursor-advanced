const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1 
const getPairs = (studentsPairs) => {
    const pairs = [];
    pairs.push([studentsPairs[0]].concat(studentsPairs[2]));
    pairs.push([studentsPairs[1]].concat(studentsPairs[3]));
    pairs.push([studentsPairs[4]].concat(studentsPairs[5]));
    return pairs;
};

// 2
const getPairsThemes = (students, studentsThemes) => {
    const pairsThemes = [];
    pairsThemes.push([students[0][0] + ' and ' + students[0][1]].concat(studentsThemes[1]));
    pairsThemes.push([students[1][0] + ' and ' + students[1][1]].concat(studentsThemes[2]));
    pairsThemes.push([students[2][0] + ' and ' + students[2][1]].concat(studentsThemes[0]));
    return pairsThemes;
};

// 3
const getStudentsMarks = (students, studentMark) => {
    const studentsMarks = [];
    for(let i = 0; i < students.length; i++){
        studentsMarks.push([students[i]].concat(studentMark[i]));
    }
    return studentsMarks;
};

// 4
const getRandomMarks = (marks) => {
    marks = [];
    for(let i = 0; i < 3; i++){
        marks.push(parseInt(Math.random() * 5));
        if(marks[i] === 0){
            marks[i] = 1;
        }
    }
    return marks;
};

const getPairsMarks = (studentsThemes, studentsPairsMarks) => {
    const pairsMarks = [];
    for(let i = 0; i < studentsThemes.length; i++){
        pairsMarks.push(studentsThemes[i].concat(studentsPairsMarks[i]));
    }
    return pairsMarks;
};

const pairsOfStudents = getPairs(students);
const pairsThemes = getPairsThemes(pairsOfStudents, themes);
const studentsMarks = getStudentsMarks(students, marks);
const randomMark = getRandomMarks();
const pairsMarks = getPairsMarks(pairsThemes, randomMark);

console.log("Students pair:");
console.log(pairsOfStudents);
console.log("Theme for students pair:");
console.log(pairsThemes);
console.log("Mark for each student:");
console.log(studentsMarks);
console.log("Random mark:");
console.log(randomMark);
console.log("Mark for each pair:");
console.log(pairsMarks);