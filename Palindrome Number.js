var isPalindrome = function(x) {
    var i=0;
    var tableau=x.toString().split('');
    var length=tableau.length;
    var j=length-1;
   while(i<j){
            if(tableau[i]==tableau[j]){
                i++;
                j--;
            }
    else 
        return false;
   }
    return true;
};
