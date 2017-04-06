var R = require('ramda');

var fn = R.cond([
  [R.equals('x'), R.always(2)],
  [R.equals('y'), R.always(3)],
  [R.T, R.always(1)]
]);

function modifyObject (values) {
    var calculateValues = function(num, key, obj) {
        return num * fn(key);
    }
    return R.mapObjIndexed(calculateValues, values);
}

modifyObject({ x: 1, y: 2, z: 3 })

function generateModifiedArray (array) {
    return R.map(modifyObject, array);
}

generateModifiedArray([ { x: 1, y: 2 }, { y: 4, b: 21 } ]);