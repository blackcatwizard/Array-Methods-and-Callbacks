import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Investigate the data above. Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
const finals2014 = fifaData.filter(function(item){
    return item.Year === 2014 && item.Stage === "Final";
});
console.log('finals2014 array:', finals2014)
//(a) Home Team name for 2014 world cup final
console.log('task 1 a:',finals2014[0]['Home Team Name'])
//(b) Away Team name for 2014 world cup final
console.log('task 1 b:',finals2014[0]['Away Team Name'])
//(c) Home Team goals for 2014 world cup final
console.log('task 1 c:',finals2014[0]['Home Team Goals'])
//(d) Away Team goals for 2014 world cup final
console.log('task 1 d:',finals2014[0]['Away Team Goals'])
//(e) Winner of 2014 world cup final */
let Winner;
if(finals2014[0]['Home Team Goals'] > finals2014[0]['Away Team Goals']){
    Winner = finals2014[0]['Home Team Name'];
}
else if(finals2014[0]['Home Team Goals'] < finals2014[0]['Away Team Goals']){
    Winner = finals2014[0]['Away Team Name'];
}
else{
    Winner = "Tie";
}
console.log('task 1 e:', Winner)


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const finals = data.filter(d => (d.Stage === "Final"));
    return finals
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data, getFinals) {
    let years = getFinals(data).map(item => (item.Year))
    /* ^ that's an implicit return */
    return years
}




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data, getFinals) {
    let winners = getFinals(data).map(item => {
        if(item['Home Team Goals'] > item['Away Team Goals']){
            return item['Home Team Name'];
        }else{
            return item['Away Team Name'];
        }
    })
    return winners
}




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(data, getYears, getWinners) {
    let years = getYears(data)
    let winners = getWinners(data)
     let winnersByYear = winners.map((winner, idx) => (`In ${years[idx]}, ${winner} won the world cup!`))
     return winnersByYear
    /* code here */
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const reducer = (acc, curr) => {
        return acc + curr['Home Team Goals'] + curr['Away Team Goals']
        }
    let sum = data.reduce(reducer, 0)
    let avg = Math.round((sum / data.length) * 100) / 100;
    return avg.toString();
   /* code here */
}






/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}