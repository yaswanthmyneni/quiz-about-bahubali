var rls = require('readline-sync');
const chalk = require('chalk');

var cyan = chalk.cyanBright;
var red = chalk.redBright;
var green = chalk.green;
var yellowItalic = chalk.italic.yellowBright;

var userName = rls.question(cyan('Whats your name? '));
console.log(yellowItalic('Hello! ' + userName));
var score = 0;


function play(question, answer) {
  var userAnswer = rls.question(cyan(question));

  if(userAnswer === answer) {
    score++;
    console.log(yellowItalic('You are Right!'));
  } else {
    score--;
    console.log(yellowItalic('You are Wrong!'));
  }

  console.log(yellowItalic('The score is', score));
  console.log('------------------');

}

var qnaList = [
  {
    question: 'When did Bahubali Movie released? ',
    answer: '2018',
  },
  {
    question: 'Hero name in Bahubali Movie? ',
    answer: 'prabhas',
  },
  {
    question: 'Heroine name in Bahubali Movie? ',
    answer: 'anushka',
  },
];

for (var i = 0; i < qnaList.length; i++){
  var pointing = qnaList[i];
  play(pointing.question, pointing.answer);
}

if(score === qnaList.length) {
  console.log(green('Congratulations, you won the quiz!'));
} else {
  console.log(red('Sorry, try again!'));
}




