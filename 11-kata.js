const organizeInstructors = function(instructors) {
  obj = {};


  for (let i = 0; i < instructors.length; i++) {
    if (obj[instructors[i].course] === undefined) {
      obj[instructors[i].course] = [];
    } 
    for (let j = 0; j < Object.keys(obj).length; j++) {
      if (Object.keys(obj)[j] === instructors[i].course) {
        obj[instructors[i].course].push(instructors[i].name)
      }
    }
  }

  return obj;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));





