 var addDigits=function(num) {
    var i=0;
    var sum=0;
    var dig=0;
    var length=num.toString().length;
    if(length==1)
        return num;
    while(i<length){
    dig=num.toString()[i];
    sum+=parseInt(dig);
    i++;
    if(i==length && sum.toString().length!=1){
        num=sum;
        sum=0;
        i=0;
        length=num.toString().length;
    }
    }
    return sum;
 };
