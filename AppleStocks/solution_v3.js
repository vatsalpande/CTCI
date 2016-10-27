(function () {

    function highestProfit (array) {
        if(array.length <2) {
            throw " Array length has to be at least 2 for comparing values";
        }else {
            var minValue = array[0];
            var maxProfit = array[1] -array[0];

            for (var i= 1; i<array.length; i++) {
                var potentialProfit = array[i] - minValue;
                minValue = Math.min(minValue, array[i]);
                maxProfit = Math.max(maxProfit, potentialProfit);
            }
            return maxProfit;
        }
    }

    var array = [400,200,180,160,152,146,130];
    console.info (highestProfit(array));

})();