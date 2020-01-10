const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const dateSuffix = dayRaw => {
  return (dayRaw === 1) || (dayRaw === 21) || (dayRaw === 31) ? dayRaw += "st"
  : (dayRaw === 2) || (dayRaw === 22) ? dayRaw += "nd"
  : (dayRaw === 3) || (dayRaw === 23) ? dayRaw += "rd"
  : dayRaw += "th";
}

let talkingCalendar = (date) => {
  arr = date.split('');
  year = arr.splice(0, 4).join('');
  monthIdx = parseInt(arr.splice(1, 2).join(''));
  dayRaw = parseInt(arr.splice(2,3).join(''));
  return `${monthNames[monthIdx - 1]} ${dateSuffix(dayRaw)}, ${year}`
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

