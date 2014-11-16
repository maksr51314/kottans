
function deepCopy(obj) {

    //if object
    if (null == obj || "object" != typeof obj) return obj;

    var
        copy = obj.constructor(),
        key;

    for (key in obj) {
        if ( obj.hasOwnProperty(key) ) copy[key] = obj[key];
    }

    return copy;
}