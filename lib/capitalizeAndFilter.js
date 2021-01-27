const capitalizeAndFilter = (array) => {
  const capLetter = array.map((string) => string.toUpperCase());
  return capLetter.filter(string => string[0] !== 'F');

  
};

module.exports = {
  capitalizeAndFilter
};

