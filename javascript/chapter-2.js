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
module.exports.consecutiveRepeatedWords = string => 
  /\b(\w+)\s(\1)\b/.test(string);

/*2.2-2: all strings that start at the beginning of the line 
  with an integer and that end at the end of the line with a word;
  */
 module.exports.startsWithIntegerEndsWithWord = 
    string => /^\d+.*\b\w+$/.test(string);

/*2.2-3: all strings that have both the word grotto and the word raven in them 
 * (but not, e.g., words like grottos that merely contain the word grotto);*/

module.exports.grottoRaven = string => 
  /^(?=.*\bgrotto\b)(?=.*\braven\b).*$/g.test(string);

/*2.2-4: write a pattern that places the first word of an English sentence in a 
  * register. Deal with punctuation.
  *
  * obs.: that means: we can't simply match the beginning of the string. The
  * word "sentence" is the important detail here.
  *
  * Using the positive lookbehind feature from JavaScript's reges, the solution
  * could be "(?<=^|[\.\!\?]\s)([A-Z]\w*) But let's discard this option in our 
  * solution given the fact that this is a specific feature from the language
  * and was not mentioned in the book.
  *
  * The parenthesis in the second part of the regex is important because, as
  * the problem states, we need to add the match to a register.
  */

module.exports.regex224 = /(?:^|[\.\!\?]\s)([A-Z]\w*)/g;
