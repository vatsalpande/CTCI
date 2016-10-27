/**
 * This program is used to demonstrate binary search program.
 * Works specifically for sorted array.
 * Runtime = O(logN)
 * Pseudocode -
 * Given a sorted array - Check for the average of two indexes. Start with index - 0 & the last index
 * ie (array.length -1 ). Get the average index. Check if the index value is greater. If greater,
 * change min to the average index and end will remain the same. then take the average and check the value again
 * If value is less, start will remain same and max index will be changed.
 *We can also determine how many values we have before the searched value.
 *Simple. Just the index value. If item is found at index 3 - then we have 3 indexes before the value.
 * Let's write a beautiful modular program for binary search
 * /
 */

 function getSortedArray(){
     return [2,4,5,7,11,13,18,20,25,30,33,34,36,38,40,42,50,59,65,69,77];
 }

 function processData(){
     var dataSet = getSortedArray();
     var start = 0;
     var end = dataSet.length -1;
     var valueToSearch = 432;
     var foundIndex = searchValue(start, end);
     if(!foundIndex){
         console.log('The value is not present in the array')
     }else{
         console.log(`The value is present at index ${foundIndex}`)
     }

     function searchValue(start, end){
         if(start < end){
             const average = Math.trunc((start + end)/2);
             if(valueToSearch == dataSet[average]){
                 return average;
             } else {
                 if(dataSet[average] < valueToSearch){
                     start = average +1;
                 }else if (dataSet[average] > valueToSearch){
                     end = average -1;
                 }
                 return searchValue(start, end);
             }

         }
     }
 }
processData();
