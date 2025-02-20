const sumItems = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += sumItems(array[i]);
    } else {
      sum += array[i];
    }
  }
  return sum;
};

module.exports = sumItems;