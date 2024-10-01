const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const prefix = (addPrefix) => {

  const newNames = [];

  for( let i = 0; i < addPrefix.length; i += 1 ) {
    newNames [i] = 'Mr ' + addPrefix [i];
  }
return newNames;
  
};

const newNames = prefix([...names]);

console.log(newNames);