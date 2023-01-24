module.exports = function towelSort (matrix) {
    
    if (matrix === undefined) {
      return []
    }

    const arr = matrix.reduce((acc, currentVal, index) => {
      currentVal.sort((a, b) => !(index & 1) ? a - b : b - a).map(el => acc.push(el));
    return acc;
     }, []);

    return arr;
  }
