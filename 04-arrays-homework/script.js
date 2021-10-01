const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1 
const getPairs = (studentsPairs) => {
    const pairs = [];
    const pair1 = [];
    const pair2 = [];
    const pair3 = [];
    pair1.push(studentsPairs[0]);
    pair1.push(studentsPairs[2]);
    pair2.push(studentsPairs[1]);
    pair2.push(studentsPairs[3]);
    pair3.push(studentsPairs[4]);
    pair3.push(studentsPairs[5]);
    pairs.push(pair1);
    pairs.push(pair2);
    pairs.push(pair3);
    return pairs;
};

// 2
const getPairsThemes = (studentsThemes) => {
    const pairsThemes = [];
    pairsThemes.push([[pairsOfStudents[0][0] + ' and ' + pairsOfStudents[0][1]].concat(studentsThemes[1])]);
    pairsThemes.push([[pairsOfStudents[1][0] + ' and ' + pairsOfStudents[1][1]].concat(studentsThemes[2])]);
    pairsThemes.push([[pairsOfStudents[2][0] + ' and ' + pairsOfStudents[2][1]].concat(studentsThemes[0])]);
    return pairsThemes;
};

// 3
const getStudentsMarks = (studentMark) => {
    const studentsMarks = [];
    studentsMarks.push([[students[0]].concat(studentMark[0])]);
    studentsMarks.push([[students[1]].concat(studentMark[1])]);
    studentsMarks.push([[students[2]].concat(studentMark[2])]);
    studentsMarks.push([[students[3]].concat(studentMark[3])]);
    studentsMarks.push([[students[4]].concat(studentMark[4])]);
    studentsMarks.push([[students[5]].concat(studentMark[5])]);
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

const getPairsMarks = (studentsPairsMarks) => {
    let pairsMarks = [];
    pairsMarks.push([pairsThemes[0][0].concat(studentsPairsMarks[0])]);
    pairsMarks.push([pairsThemes[1][0].concat(studentsPairsMarks[1])]);
    pairsMarks.push([pairsThemes[2][0].concat(studentsPairsMarks[2])]);
    return pairsMarks;
};

const pairsOfStudents = getPairs(students);
const pairsThemes = getPairsThemes(themes);
const studentsMarks = getStudentsMarks(marks);
const randomMark = getRandomMarks();
const pairsMarks = getPairsMarks(randomMark);

console.log(pairsOfStudents);
console.log(pairsThemes);
console.log(studentsMarks);
console.log(randomMark);
console.log(pairsMarks);