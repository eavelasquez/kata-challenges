const removeChar = (str) => {
  return str.slice(1, str.length-1)
 };

 console.log(removeChar('eloquent'));
 console.log(removeChar('country'));
 console.log(removeChar('place'));
 console.log(removeChar(''));

 /*
 
function removeChar(str) {
  return str.slice(1, -1);
}
 
 */