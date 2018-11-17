const test = require("tape");
const NLP2 = require("../chapter-2");

test("2.1.1 - set of all alphabetic strings", t => {
  t.plan(5);

  t.ok(NLP2.regexAlphabetic('aiygiyagsjaywgdj'));
  t.ok(NLP2.regexAlphabetic(''));
  t.notOk(NLP2.regexAlphabetic('asdjkhsdk askdjhdkjh'), 'whitespace is non-alphabetic');
  t.notOk(NLP2.regexAlphabetic('123415'), 'numbers are non-alphabetic');
  t.notOk(NLP2.regexAlphabetic('adasd1'));

  t.end();
});
