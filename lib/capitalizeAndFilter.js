function capitalizeAndFilter(array) {
  const newArray = [];
  for(let i = 0; i < array.length; i++) {
    const string = array[i];
    const capString = string.toUpperCase();
    const firstLet = capString[0];
    if(firstLet !== 'F') {
      newArray.push(capString);
    }
  }
  return newArray;
}

module.exports = {
  capitalizeAndFilter
};

