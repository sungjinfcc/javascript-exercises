const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        const currentAge = current.yearOfDeath
        ?
        current.yearOfDeath - current.yearOfBirth
        :
        (new Date()).getFullYear() - current.yearOfBirth;
        console.log(current.name, currentAge);
        if(!oldest){
            return current;
        }
        const oldestAge = oldest.yearOfDeath 
        ? oldest.yearOfDeath - oldest.yearOfBirth
        : (new Date()).getFullYear() - oldest.yearOfBirth;
        if(currentAge > oldestAge){
            oldest = current;
        }
        return oldest;
    })
};
const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];
  findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
