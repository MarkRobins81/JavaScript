const cohort = {
    name: 'MAY2022',
    id: '1234',
    studentNames: ['Fred', 'Bill', 'Ben']
};

const displayMessage = (myObject) => {
    console.log ('<COHORT_ID> - ' + myObject.id + ' <COHORT_NAME> - ' + myObject.name + ' <NUMBER OF STUDENTS> - ' + myObject.studentNames.length)
};

displayMessage(cohort);
