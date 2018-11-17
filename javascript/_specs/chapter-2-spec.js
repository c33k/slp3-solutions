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


  