/** Fibonacci series without recurssion **/

function fib(n){
  var i;
  var prev;
  var curr;
  var newVal;
  var fibSeries;
   for(i=0;i<n;i++){
     if(i <= 1){
       fibSeries = 1 + "\t";
       prev = 1;
       curr = 1;
       return ;
     }
     newVal = prev + curr;
     fibSeries =  newVal+ "\t";
     prev = curr;
     curr = newVal;
    
  }
  return fibSeries;
}
