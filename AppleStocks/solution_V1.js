( function () {

    function largestProfit(array) {

        var diff;
        for(var i=0; i<array.length; i++) {
            for( var j=i+1; j<array.length; j++) {
                if (!diff) {
                    diff = array[j] -array[i];
                }else{
                    if (diff <array[j]-array[i]) {
                        diff = array[j] -array[i];
                    }
                }
            }
        }
        return diff;
    }

    var array = [40,30,20,18,7,5,3,1];
    console.info (largestProfit(array));
})();