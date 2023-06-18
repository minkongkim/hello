const objarray = [
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' },
];

for (const i in objarray) {
  debugger;
  console.log('v-for지시자는', objarray[i]);
}
for (const i of objarray) {
  console.log('v-for지시자는', i);
}
//분해할당
for (const { text, value } of objarray) {
  console.log('v-for지시자는', text, value);
}
