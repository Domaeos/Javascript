var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];

// SEPERATE FUNCTIONS //

  const jediPersonnel = personnel.filter(function (pilot) {
    return pilot.isForceUser;
  });
  const jediScores = jediPersonnel.map(function (jedi) {
    return jedi.pilotingScore + jedi.shootingScore;
  });
  const totalScores = jediScores.reduce(function (acc,score){
    return acc+score;
  });
  console.log(jediPersonnel);
  console.log(jediScores);
  console.log(totalScores);

  // ALL 3 FUNCTIONS CHAINED

  const chainedScores =
    personnel.filter(function (pilot) {
        return pilot.isForceUser;
    })
    .map(function (jedi) {
        return jedi.shootingScore + jedi.pilotingScore;
    })
    .reduce(function (acc, score) {
        return acc + score;
    }, 0);

console.log(chainedScores);

// WITH ARROW FUNCTIONS

const arrowScore = personnel
    .filter(person => person.isForceUser)
    .map(pilot => pilot.pilotingScore + pilot.shootingScore)
    .reduce((acc, score) => acc + score, 0); // More than one argument so bracket the arrow function

console.log(arrowScore)

// REDUCE ONLY

const reduceOnly = personnel
    .reduce(function(acc, pilot) {
        if (pilot.isForceUser === true) {
            return acc + pilot.shootingScore + pilot.pilotingScore;
        } else {
            return acc;    
        }
        // Or Written as Ternary operator
        // return (pilot.isForceUser) ? acc + shoot + pilot : acc
    },0);

console.log(reduceOnly)