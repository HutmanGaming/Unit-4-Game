	
	
	$(document).ready(function(){


        //variables
    
        var goal = 0;
        var wins= 0;
        var losses = 0;
        var steve;
    
        
    
        function randomNum(min,max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max-min +1)) + min;
    
        }
    
        var target = randomNum(40,90);
        $("#target").html(target);
    
        var C1= randomNum(1, 12);
        var C2= randomNum(1, 12);
        var C3= randomNum(1, 12);
        var C4= randomNum(1, 12);
    
        function reset(){
            goal = 0;
            $("#target").html(target);
            target = randomNum(40,90);
            $("#playerScore").text(goal);
            C1= randomNum(1, 12);
            C2= randomNum(1, 12);
            C3= randomNum(1, 12);
            C4= randomNum(1, 12);
    
    
        }
    
        
        $("#C1").on("click", function(){
            goal += C1;
            WinLose();
            $(playerScore).text(goal);
            
        });
    
        $("#C2").on("click", function(){
            goal += C2;
            WinLose();
            $(playerScore).text(goal);
            
    
        });
    
        $("#C3").on("click", function(){
            goal += C3;
            WinLose();
            $(playerScore).text(goal);
            
    
        });
    
        $("#C4").on("click", function(){
            goal += C4;
            WinLose();
            $(playerScore).text(goal);
            
    
        });

        $("#steve").on("click", function(){
            alert ("No, click on the ores don't click on steve! He doesn't like to be clicked on.")
            
        });
    
        function WinLose (){
    
        if (goal === target){
            wins += 1;
            $(win).text(wins);
            reset();
    
        } else if(goal > target){
            losses += 1;
            $(loss).text(losses);
            reset();
        }
        
    }
        
    });
    
    
    
    
        
    
    
    