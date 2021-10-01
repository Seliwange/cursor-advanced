const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

students.push([marks]);
console.log(students);
// 1 
const getPairs = () => {
    let pairs = [];
    let pair1 = [];
    let pair2 = [];
    let pair3 = [];
    pair1.push(students[0]);
    pair1.push(students[2]);
    pair2.push(students[1]);
    pair2.push(students[3]);
    pair3.push(students[4]);
    pair3.push(students[5]);
    pairs.push(pair1);
    pairs.push(pair2);
    pairs.push(pair3);
    return pairs;
};

const pairs = getPairs(students);
console.log(pairs);

// 2
const getPairsThemes = () => {
    let groups = [];
    // let group1 = [];
    // let group2 = [];
    // let group3 = [];
    // group1.push([pairs[0][0] + ' and ' + pairs[0][1]].concat(themes[1]));
    // group2.push([pairs[1][0] + ' and ' + pairs[1][1]].concat(themes[2]));
    // group3.push([pairs[2][0] + ' and ' + pairs[2][1]].concat(themes[0]));
    groups.push([[pairs[0][0] + ' and ' + pairs[0][1]].concat(themes[1])]);
    groups.push([[pairs[1][0] + ' and ' + pairs[1][1]].concat(themes[2])]);
    groups.push([[pairs[2][0] + ' and ' + pairs[2][1]].concat(themes[0])]);
    return groups;
};

const groups = getPairsThemes(students);
console.log(groups);

// 3
const getStudentsMarks = () => {
    let studentsMarks = [];
    // let student1Mark = [];
    // let student2Mark = [];
    // let student3Mark = [];
    // let student4Mark = [];
    // let student5Mark = [];
    // let student6Mark = [];
    // student1Mark.push([students[0]].concat(marks[0]));
    // student2Mark.push([students[1]].concat(marks[1]));
    // student3Mark.push([students[2]].concat(marks[2]));
    // student4Mark.push([students[3]].concat(marks[3]));
    // student5Mark.push([students[4]].concat(marks[4]));
    // student6Mark.push([students[5]].concat(marks[5]));
    studentsMarks.push([[students[0]].concat(marks[0])]);
    studentsMarks.push([[students[1]].concat(marks[1])]);
    studentsMarks.push([[students[2]].concat(marks[2])]);
    studentsMarks.push([[students[3]].concat(marks[3])]);
    studentsMarks.push([[students[4]].concat(marks[4])]);
    studentsMarks.push([[students[5]].concat(marks[5])]);
    return studentsMarks;
};

const studentsMarks = getStudentsMarks(students);
console.log(studentsMarks);

// 4
const randomMarks = (marks) => {
    marks = new Array(3);
    marks.fill(parseInt(Math.random() * 5));
    return marks;
};
const randomMark = randomMarks(marks);
console.log(randomMark);

const getGroupsMarks = () => {
    let groupsMarks = [];
    // let group1Mark = [];
    // let group2Mark = [];
    // let group3Mark = [];
    // group1Mark.push(groups[0][0].concat(randomMark[0]));
    // group2Mark.push(groups[1][0].concat(randomMark[1]));
    // group3Mark.push(groups[2][0].concat(randomMark[2]));
    groupsMarks.push([groups[0][0].concat(randomMark[0])]);
    groupsMarks.push([groups[1][0].concat(randomMark[1])]);
    groupsMarks.push([groups[2][0].concat(randomMark[2])]);
    return groupsMarks;
};

const groupsMarks = getGroupsMarks(students);
console.log(groupsMarks);