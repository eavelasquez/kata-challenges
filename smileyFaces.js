/* Description:
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:
-Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
-A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
-Every smiling face must have a smiling mouth that should be marked with either ) or D.
No additional characters are allowed except for those mentioned.
Valid smiley face examples:
:) :D ;-D :~)
Invalid smiley faces:
;( :> :} :] 

Example cases:

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1; */

//return the total number of smiling faces in the array
/* function countSmileys(arr) {
  let counter = 0;
  let hasValidNose;
  let hasValidMouth;
  let hasValidEyes;

  if (arr.length === 0) {
    return counter = 0;
  } 
  else {
    arr.forEach((face) => {
      if(face.length ===  3) {
        console.log(face.length)
        hasValidNose = face.charAt(1) === '-' || face.charAt(1) === '~';
        hasValidMouth = face.charAt(2) === ')' || face.charAt(2) === 'D';
        hasValidEyes = face.charAt(0) === ':' || face.charAt(0) === ';';
      }
      else if(face.length <= 2) {
        console.log(face.length)
        hasValidNose = true;
        hasValidMouth = face.endsWith(')') || face.endsWith('D');
        hasValidEyes = face.startsWith(':') || face.startsWith(';');
      } else if (face.length > 3) {
        hasValidMouth = false;
      }
      (hasValidMouth && hasValidEyes && hasValidNose) ? counter++ : '';
    });

    return counter;
  }
} */

function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}


console.log('smiles: ', countSmileys([ ';~)', ':)', ':-)', ':--)' ]));       // should return 3;
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));     // should return 3;
console.log(countSmileys([';]', ':[', ';*)', ':$', ';-D'])); // should return 1;


/*
function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

const SMILING = /[:;]{1}[-~]?[)D]{1}/;
const countSmileys = (faces) => faces.filter(face => SMILING.test(face)).length;

countSmileys=arr=> arr.filter(v => /(:|;)(-|~)?(\)|D)/.test(v)).length; 

function countSmileys(arr) {
  return arr.reduce((n, s) => /^[:;][-~]?[)D]$/.test(s) ? n + 1 : n, 0)
}

*/