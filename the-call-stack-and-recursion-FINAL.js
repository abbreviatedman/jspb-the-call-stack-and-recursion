debugger;

const convertFromCelsius = (degreesCelsius) => {
    return degreesCelsius * 9 / 5 + 32;
}

convertFromCelsius(0);
convertFromCelsius(20);
convertFromCelsius(30);

const treeCarver = (name1, name2) => {
    const initials1 = initialsMaker(name1);
    const initials2 = initialsMaker(name2);

    return initials1 + ' hearts ' + initials2;
}

const initialsMaker = (name) => {
    const firstName = name.slice(0, name.indexOf(' '));
    const lastName = name.slice(name.indexOf(' ') + 1);

    return firstName[0] + '.' + lastName[0] + '.';
}

const treeCarving1 = treeCarver('Lois Lane', 'Clark Kent');
const treeCarving2 = treeCarver('Walter White', 'Doing Crimes');

function student1() {
    const names1 = ['Wacine'];
    student2(names1);
}

function student2(names) {
    const names2 = names.slice();
    names2.push('George');
    student3(names2);
}

function student3(names) {
    const names3 = names.slice();
    names3.push('Charles');
    instructor(names3);
}

function instructor(names) {
    console.log(names);
}

student1();

function student1Factorial(num) {
    const nextPersonsNumber = student2Factorial(num - 1);

    return num * nextPersonsNumber;
}

function student2Factorial(num) {
    const nextPersonsNumber = student3Factorial(num - 1);

    return num * nextPersonsNumber;
}

function student3Factorial(num) {
    const nextPersonsNumber = student4Factorial(num - 1);

    return num * nextPersonsNumber;
}

function student4Factorial(num) {
    const nextPersonsNumber = student5Factorial(num - 1);

    return num * nextPersonsNumber;
}

function student5Factorial(num) {
    return num;
}

student1Factorial(5);

const getFactorial = (num) => {
    if (num === 1) {
        return 1;
    }

    const answerForOneLess = getFactorial(num - 1);

    return num * answerForOneLess;
}

getFactorial(5);