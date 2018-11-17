//2.1-1: set of all alphabetic strings
module.exports.regexAlphabetic = string => /^[A-Za-z]*$/.test(string);

//2.1-2: set of lowercase alphabetic strings ending in b
module.exports.regexLowerCaseEndingInB = string => /^[a-z]*b$/.test(string);

/*2.1-3: the set of all strings from the alphabet 
  a,b such that each a is immediately preceded by and 
  immediately followed by a b;
*/
module.exports.testASurroundedByB = string => /^(b(ab)*)*$/.test(string);