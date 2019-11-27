const test = require("ava");
const logistic = require("./index.js");

test('returns 0.5', t => {
   t.is(logistic(0, 1, 1, 0), 0.5);
});

test('should be less than 1', t => {
   t.true(logistic(10, 1, 1, 0) < 1);
});