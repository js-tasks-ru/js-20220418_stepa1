/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let result = {};
  for (let[fruit, key] of Object.entries(obj)) {
    fields.find(f => fruit === f) === undefined ? result[fruit] = key : ''
  }
  return result ? result : obj ;
};
