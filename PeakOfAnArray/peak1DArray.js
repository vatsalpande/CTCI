( function () {
    var arrayToFind = [2,1,10,12,16,5,4,3];
    function peak1DArray (array) {

        if (Array.isArray(array)) {
            if(array.length == 1) {
                return  array[0];
            }else{
                var peak;
                var peakValue;
                for (var i = 0; i<array.length; i++) {
                    if (array[i-1] && array[i+1]) {
                        peak = array[i] >= array[i-1] && array[i] >= array[i+1];
                    }else if (array[i-1]) {
                        peak = array[i] >= array[i-1];
                    }else {
                        peak = array[i] >= array[i+1];
                    }

                    if(peak){
                        peakValue = array[i];
                        break;
                    }
                }

                return peakValue;
            }
        }
    }
    var peakValue = peak1DArray(arrayToFind);

    if(peakValue) {
        console.log ('Peak value is '+peakValue);
    } else{
        console.log ('No peak found in the array provided');
    }
})();