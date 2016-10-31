( function () {

    var array =     [
        {startTime: 1, endTime: 10},
        {startTime: 2, endTime: 6},
        {startTime: 3, endTime: 5},
        {startTime: 7, endTime: 9},
    ];

    var resultObj = [], objInQuestion = {}, startTimeMin, endTimeMax;
    for (var i =0; i<array.length; i++){
        objInQuestion = array[i];
        if (array[i +1] && objInQuestion.endTime < (array[i +1].startTime)) {
            if (startTimeMin && endTimeMax) {
                objInQuestion.startTime = Math.min (startTimeMin, array[i].startTime);
                objInQuestion.endTime = Math.max (endTimeMax, array[i].endTime);
                startTimeMin = undefined;
                endTimeMax = undefined;
            }
            resultObj.push(objInQuestion);
        }else {
            if (!startTimeMin) {
                startTimeMin  = array[i].startTime;
                endTimeMax  = array[i].endTime;
            }
            startTimeMin = Math.min (startTimeMin, array[i].startTime);
            endTimeMax = Math.max (endTimeMax, array[i].endTime);
        }
    }
    if(startTimeMin && endTimeMax) {
        resultObj.push({"startTime":startTimeMin, "endTime": endTimeMax});
    }
    console.info (resultObj);
    return resultObj;
})();