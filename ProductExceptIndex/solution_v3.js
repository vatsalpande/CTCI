( function () {

    function multiplicationBeforeIndex (array) {
        var product = 1;
        var result = [];
        for( var i=0; i<array.length; i++) {
            result.push(product);
            product *= array[i];
        }
        return result;
    }

    function multiplicationExceptIndex (array) {
        var product = 1;
        var productBeforeIndex = multiplicationBeforeIndex (array);
        console.log('ProductBeforeIndex is ',productBeforeIndex);
        for (var i=array.length -1; i >=0 ; i-- ) {
            productBeforeIndex[i] *=  product;
            product *= array[i];
        }
        return productBeforeIndex;
    }

    var array = [4,5,6,7,8];
    console.time('Executing Script');
    console.info (multiplicationExceptIndex(array));
    console.timeEnd('Executing Script');


})();