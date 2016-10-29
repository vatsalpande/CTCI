/**
 * Brute Force way
 * First Solution . Complexity O(N^3)
 */

( function () {
    function largestProductOfThree (array) {
        var maxProduct;
        if (Array.isArray(array)) {
            for (var i=0; i<array.length; i++) {
                for (var j=i+1; j<array.length; j++) {
                    for(var k=j+1; k<array.length; k++) {
                        if(!maxProduct) {
                            maxProduct =  array[i]*array[j]*array[k];
                        }
                        if (maxProduct < array[i]*array[j]*array[k]) {
                            maxProduct = array[i]*array[j]*array[k];
                        }
                    }
                }
            }
            return maxProduct;

        }else {
            console.error ('Please check the input provided');
        }
    }

    var array = [-1,2,2,3];
    var product = largestProductOfThree(array);
    console.log(product);

})();