const allStudent = ['Billie Herrington','Dungeon master','Mark wolf','Danny Lee','Steve Rambo','Brad McGuire','Rey Harley','Steve Herley'];
const badStudent = ['Danny Lee','Brad McGuire','Steve Herley'];

const result = allStudent.filter(student => !badStudent.includes(student));

console.log(result);