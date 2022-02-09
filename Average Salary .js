var average = function(salary) {
   if(salary.length>=3 && salary.length<=100){
    var min=salary[0];
    var max=salary[0];
    var minPos=0;
    var maxPos=0;
    var av=0;
    var sum=0;
    var nb=0;
    for(var i=1;i<salary.length;i++){
        if(min>salary[i]){
            min=salary[i];
            minPos=i;
        }
        else if(max<salary[i]){
            max=salary[i];
            maxPos=i;
        }
        
    }
       i=0;
       while(i<salary.length){
           if(i!=minPos && salary[i]!=min)
               {
                   if(i!=maxPos && salary[i]!=max){
                      nb++;
                       sum+=salary[i]; 
                   }
               }
           i++;
       }
            av=sum/nb;
           return av;

       }
   
};
