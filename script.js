let students = [
{
  name: 'João',
  noteOne: 7.2,
  noteTwo: 6.9
},
{
  name: 'Claudia',
  noteOne: 5,
  noteTwo: 6.7
},
{
  name: 'Max',
  noteOne: 7,
  noteTwo: 3.5
}
]


function averageNote(noteOne, noteTwo){
  return ((noteOne + noteTwo) / 2).toFixed(2)
}

function printStudentAverage(students){
  if(averageNote(students.noteOne, students.noteTwo) >= 7){
    return `Congratulations, ${students.name}! You were approved.
His average grade has ${averageNote(students.noteOne, students.noteTwo)}.`
  } else{
    return `Sorry, ${students.name}! You have not been approved. 
His average grade was: ${averageNote(students.noteOne, students.noteTwo)}.
    `
  }
}
for (let student of students) {
  let averageMSG = printStudentAverage(student)
  alert(averageMSG)
  
}


