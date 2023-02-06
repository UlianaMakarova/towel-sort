
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if ( typeof (matrix) === 'undefined')
    return result;
  if (matrix.length === 0)
    return result;

  matrix.forEach((element,index) => {
    index % 2 === 0 ? result.push(element): result.push(element.reverse());
  });
  return result.join(',').split(',').map(el=> Number(el))//.split(',');
}
