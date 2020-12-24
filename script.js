$(document).ready(function(){
    const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
    var player1 = [];
    function check(){

      var conditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];    
    
    
    console.log(player1);
    for (let index = 0; index < conditions.length; index++) {
        if(equals(player1 , conditions[index])){
            console.log("WE have a winner");
        }
      
        
    }
           





    }
    var num = 0;












    //front-end
 $('li').click(function(){
    
    if(num%2==0 && $(this).text()!='X'  && $(this).text()!='O'){

        $(this).html('X');
       player1.push( $(this).val());
        num++;
    }
    if(num%2!=0 && $(this).text()!='X'  && $(this).text()!='O'){
        $(this).html('O');
        num++;
    }
    check();
 } )
})
    

