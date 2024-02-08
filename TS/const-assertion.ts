const person = {
  name: "John Doe",
  age: 25,
} as const;

person.age = 1;




const personNameAge = ["john doe", 25] as const;

personNameAge[0] = '...';




function switchValue(input: boolean) {
  const onSwitch = (input ? 'On' : 'Off') as const; // Won't work
  return onSwitch;
}

function switchValue2(input: boolean) {
  const onSwitch = input ? 'On' as const : 'Off' as const;
  return onSwitch;
}

