/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

function findUserByUsername(usersArray, username) {
  for(let i = 0; i < usersArray.length; i++){
    /* if usersArray[i]'s value matches username input return that object */
    if(usersArray[i].username === username){
      return usersArray[i];
    }
  }
  /* if nothing is found, return undefined */
  return undefined;
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

function removeUser(usersArray, username) {
  /* creating an empty object to store removed object before its deleted. */
  let removedUser = {};
  for(let i = 0; i < usersArray.length; i++){
    /* if usersArray[i]'s value matches username input remove that object */
    if(usersArray[i].username === username){
      /* assign empty object with key and value of usersArray[i] */
      removedUser = usersArray[i];
      usersArray.splice(i,1);
      return removedUser;
  
      
    }
  }
  /* if nothing is found, return undefined */
  return undefined;
}