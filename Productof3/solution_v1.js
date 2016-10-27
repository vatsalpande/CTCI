/**
 * Brute Force way
 * First Solution . Complexity O(N^3)
 */

( function () {
    function largestProductOfThree (array) {
        var product = 1;
        if (Array.isArray(array) && array.length >3) {

            for (var i=0; i<array.length; i++) {
                for (var j=i+1; j<array.length; j++) {
                    for(var k=j+1; k<array.length; k++) {
                        var newProduct = array[i]*array[j]*array[k];
                        if(newProduct >product) {
                            product = newProduct;
                        }
                    }
                }
            }
            return product;

        }else if (array.length ==3){
            product = array[0]*array[1]*array[2];
            return product;
        }else {
            console.error ('Please check the input provided');
        }
    }

    var array = [-1,2];
    var product = largestProductOfThree(array);
    console.log(product);

})();