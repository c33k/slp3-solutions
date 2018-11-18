const test = require("tape");
const NLP2 = require("../chapter-2");

test("2.1.1 - set of all alphabetic strings", t => {
  t.ok(NLP2.regexAlphabetic('aiygiyagsjaywgdj'));
  t.ok(NLP2.regexAlphabetic(''));
  t.notOk(NLP2.regexAlphabetic('asdjkhsdk askdjhdkjh'), 'whitespace is non-alphabetic');
  t.notOk(NLP2.regexAlphabetic('123415'), 'numbers are non-alphabetic');
  t.notOk(NLP2.regexAlphabetic('adasd1'));

  t.end();
});

test("2.1.2 - lowercase alphabetic strings ending in b", t => {
    t.ok(NLP2.regexLowerCaseEndingInB('aaaaaab'));
    t.ok(NLP2.regexLowerCaseEndingInB('b'));
    t.ok(NLP2.regexLowerCaseEndingInB('abcdefghib'));
    t.notOk(NLP2.regexLowerCaseEndingInB('ASDAdadsdb'), 'uppercase letters are not allowed');
    t.notOk(NLP2.regexLowerCaseEndingInB('asdddB'), 'uppercase B is not allowed');
    t.notOk(NLP2.regexLowerCaseEndingInB(''), 'empty string is not in this set');
    t.notOk(NLP2.regexLowerCaseEndingInB('12313b'), 'numbers are not valid');
    t.notOk(NLP2.regexLowerCaseEndingInB('asdjkhsdk askdjhdkjhb'), 'whitespace is non-alphabetic');

    t.end();
  });

test("2.1.3 - alphabet a,b with all a surrounded by bs", t => {
  t.ok(NLP2.testASurroundedByB('bab'));
  t.ok(NLP2.testASurroundedByB('babababab'));
  t.ok(NLP2.testASurroundedByB('bbbab'), 'number of bs not limited');
  t.notOk(NLP2.testASurroundedByB('baba'), 'baba - last a not surrounded by b');
  t.ok(NLP2.testASurroundedByB('bb'), 'can have only bs');
  t.ok(NLP2.testASurroundedByB('b'), 'can have only one b');
  t.ok(NLP2.testASurroundedByB(''), 'empty string is valid');
  t.notOk(NLP2.testASurroundedByB('babc'), 'c is not in the alphabet');
  t.notOk(NLP2.testASurroundedByB('bab bab'), 'white space not allowed');
  t.end();
});

test("2.2.1 - the set of all strings with two consecutive repeated words", t => {
  t.ok(NLP2.consecutiveRepeatedWords('the the'));
  t.ok(NLP2.consecutiveRepeatedWords('Humbert Humbert'));
  t.ok(NLP2.consecutiveRepeatedWords('123 123'));
  t.notOk(NLP2.consecutiveRepeatedWords('the something'));
  t.ok(NLP2.consecutiveRepeatedWords('the the something'));
  t.notOk(NLP2.consecutiveRepeatedWords(''))
  t.end();
});

test("2.2.2 - begins with integer and ends with word", t => {
  t.ok(NLP2.startsWithIntegerEndsWithWord('123123 something 1hi1h23i Word'));
  t.notOk(NLP2.startsWithIntegerEndsWithWord('Word word'));
  t.notOk(NLP2.startsWithIntegerEndsWithWord('word 123'));
  t.notOk(NLP2.startsWithIntegerEndsWithWord('123'));
  t.notOk(NLP2.startsWithIntegerEndsWithWord('word'));
  t.notOk(NLP2.startsWithIntegerEndsWithWord(''));
  t.end();
});

test("2.2.3 - has both words grotto and raven", t => {
  t.ok(NLP2.grottoRaven('grotto raven'));
  t.ok(NLP2.grottoRaven('raven grotto'));
  t.ok(NLP2.grottoRaven('some other raven words grotto'));
  t.notOk(NLP2.grottoRaven('grottos ravens'));
  t.notOk(NLP2.grottoRaven('grotto ravens'), 'has grotto but dont have raven');
  t.notOk(NLP2.grottoRaven(''));
  t.end();
});

test("2.2.4 - english words in the beginning of a sentence added to a register", 
  t => {
    let str = 'The Earth is beautiful. Rafael loves Regex';    
    let matches = NLP2.regex224.exec(str);
    t.equal(matches[1], 'The');
    
    matches = NLP2.regex224.exec(str);
    t.equal(matches[1], 'Rafael');    
    
    matches = NLP2.regex224.exec(str);
    t.equal(matches, null);
    t.end();
  });



  
