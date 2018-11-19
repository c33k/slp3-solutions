const test = require("tape");
const NLP2 = require("../chapter-2");

test("2.1.1 - set of all alphabetic strings", t => {
  t.ok(NLP2.regex211.test('aiygiyagsjaywgdj'));
  t.ok(NLP2.regex211.test(''));
  t.notOk(NLP2.regex211.test('asdjkhsdk askdjhdkjh'), 'whitespace is non-alphabetic');
  t.notOk(NLP2.regex211.test('123415'), 'numbers are non-alphabetic');
  t.notOk(NLP2.regex211.test('adasd1'));

  t.end();
});

test("2.1.2 - lowercase alphabetic strings ending in b", t => {
    t.ok(NLP2.regex212.test('aaaaaab'));
    t.ok(NLP2.regex212.test('b'));
    t.ok(NLP2.regex212.test('abcdefghib'));
    t.notOk(NLP2.regex212.test('ASDAdadsdb'), 'uppercase letters are not allowed');
    t.notOk(NLP2.regex212.test('asdddB'), 'uppercase B is not allowed');
    t.notOk(NLP2.regex212.test(''), 'empty string is not in this set');
    t.notOk(NLP2.regex212.test('12313b'), 'numbers are not valid');
    t.notOk(NLP2.regex212.test('asdjkhsdk askdjhdkjhb'), 'whitespace is non-alphabetic');

    t.end();
  });

test("2.1.3 - alphabet a,b with all a surrounded by bs", t => {
  t.ok(NLP2.regex213.test('bab'));
  t.ok(NLP2.regex213.test('babababab'));
  t.ok(NLP2.regex213.test('bbbab'), 'number of bs not limited');
  t.notOk(NLP2.regex213.test('baba'), 'baba - last a not surrounded by b');
  t.ok(NLP2.regex213.test('bb'), 'can have only bs');
  t.ok(NLP2.regex213.test('b'), 'can have only one b');
  t.ok(NLP2.regex213.test(''), 'empty string is valid');
  t.notOk(NLP2.regex213.test('babc'), 'c is not in the alphabet');
  t.notOk(NLP2.regex213.test('bab bab'), 'white space not allowed');
  t.end();
});

test("2.2.1 - the set of all strings with two consecutive repeated words", t => {
  t.ok(NLP2.regex221.test('the the'));
  t.ok(NLP2.regex221.test('Humbert Humbert'));
  t.ok(NLP2.regex221.test('123 123'));
  t.notOk(NLP2.regex221.test('the something'));
  t.ok(NLP2.regex221.test('the the something'));
  t.notOk(NLP2.regex221.test(''))
  t.end();
});

test("2.2.2 - begins with integer and ends with word", t => {
  t.ok(NLP2.regex222.test('123123 something 1hi1h23i Word'));
  t.notOk(NLP2.regex222.test('Word word'));
  t.notOk(NLP2.regex222.test('word 123'));
  t.notOk(NLP2.regex222.test('123'));
  t.notOk(NLP2.regex222.test('word'));
  t.notOk(NLP2.regex222.test(''));
  t.end();
});

test("2.2.3 - has both words grotto and raven", t => {
  t.ok(NLP2.regex223.test('grotto raven'));
  t.ok(NLP2.regex223.test('raven grotto'));
  t.ok(NLP2.regex223.test('some other raven words grotto'));
  t.notOk(NLP2.regex223.test('grottos ravens'));
  t.notOk(NLP2.regex223.test('grotto ravens'), 'has grotto but dont have raven');
  t.notOk(NLP2.regex223.test(''));
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



  
