( function () {

    function isPalindrome (string, start, end) {
        if(string) {
            if (  end <0 || start == end || start>end) {
                return true;
            }else {
                if(string[start] == string[end]) {
                    return isPalindrome(start +1, end -1);
                }else {
                    return false;
                }
            }
        }else {
            return true;
        }
    }
    var string = "MOTOR";
    console.log (isPalindrome (string, 0, string.length-1));
    string = "XXXXXX";
    console.log (isPalindrome (string, 0, string.length-1));




})();