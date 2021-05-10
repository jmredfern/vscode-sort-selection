/* global suite, test */

// The module 'assert' provides assertion methods from node
const assert = require('assert');
const sort = require('../extension').sort;

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", function() {

    test("sort", function() {
        assert.equal('a, b, c', sort('b, c, a'));
    });
});