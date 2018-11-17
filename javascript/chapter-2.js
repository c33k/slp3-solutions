//2.1-1: set of all alphabetic strings
module.exports.regexAlphabetic = string => /^[A-Za-z]*$/.test(string);

//2.1-2: set of lowercase alphabetic strings ending in b
module.exports.regexLowerCaseEndingInB = string => /^[a-z]*b$/.test(string);

/*2.1-3: the set of all strings from the alphabet 
  a,b such that each a is immediately preceded by and 
  immediately followed by a b;
*/
module.exports.testASurroundedByB = string => /^(b(ab)*)*$/.test(string);

/*2.2-1: the set of all strings with two consecutive 
    repeated words (e.g., “Humbert Humbert” and “the the” 
    but not “the bug” or “the big bug”);
*/
module.exports.consecutiveRepeatedWords = string => /\b(\w+)\s(\1)\b/.test(string);

/*2.2-2: all strings that start at the beginning of the line 
  with an integer and that end at the end of the line with a word;
  */

 module.exports.startsWithIntegerEndsWithWord = 
    string => /^\d+.*\b\w+$/.test(string);