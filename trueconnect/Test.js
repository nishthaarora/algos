function modifyObject (object) {
    var newObj = {};
    for(var key in object) {
        if( object.hasOwnProperty( key ) ) {
            if(key === 'x') {
                newObj.x = object.x * 2 ;
            } else if(key === 'y') {
                newObj.y = object.y * 3;
            } else {
                newObj[ key ] = object[key];
            }
        }
    }
    return newObj 
}

modifyObject({ x: 1, y: 2, z: 3})



function generateModifiedArray (array) {
    var newArr = [];
    array.map(function(ele) {
        newArr.push(modifyObject(ele));
    })
    return newArr
}


generateModifiedArray([ { x: 1, y: 2 }, { y: 4, b: 21 } ])