function countOnline(usersObj) {
    // Only change code below this line
    var sum=0;
  for(let user in usersObj) {
    if (usersObj[user].online===true) {
     sum++;
    }
  }
  return sum
    // Only change code above this line
  }