function total(){
    var sub1=parseInt(document.getElementById("eng").value);
    var sub2=parseInt(document.getElementById("tam").value);
    var sub3=parseInt(document.getElementById("sci").value);
    var sub4=parseInt(document.getElementById("mat").value);
    var sub5=parseInt(document.getElementById("soc").value);
    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("Please Enter the marks in range of 100");
    }
    else{
    var total = sub1 + sub2 + sub3 + sub4 + sub5;
    document.getElementById("total").innerHTML = "English Marks : "+sub1+" <br> Tamil Marks : "+sub2+" <br> Science Marks : "+sub3+" <br> Maths Marks : "+sub4+" <br> Social Marks : "+sub5+" <br>...............<br> Total Marks : " +total; 
    }
}
function percentage(){
    var sub1=parseInt(document.getElementById("eng").value);
    var sub2=parseInt(document.getElementById("tam").value);
    var sub3=parseInt(document.getElementById("sci").value);
    var sub4=parseInt(document.getElementById("mat").value);
    var sub5=parseInt(document.getElementById("soc").value);
    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("Please Enter the marks in range of 100");
    }
    else{
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        var ave = total/5;
        document.getElementById("percentage").innerHTML = "Your percentage is :"   +ave;
    }
}
function grade(){
    var sub1=parseInt(document.getElementById("eng").value);
    var sub2=parseInt(document.getElementById("tam").value);
    var sub3=parseInt(document.getElementById("sci").value);
    var sub4=parseInt(document.getElementById("mat").value);
    var sub5=parseInt(document.getElementById("soc").value);
    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("Please Enter the marks in range of 100"); 
    }
    else{
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        var ave = total/5;
        if(ave>=80 && ave<=100){
        document.getElementById("grade").innerHTML = "Your grade is A";
        }
        else if(ave>=75 && ave<=79){
            document.getElementById("grade").innerHTML = "Your grade is B";
        }
        else if(ave>=51 && ave<=74){
            document.getElementById("grade").innerHTML = "Your grade is C";
        }
        else if(ave>=35 && ave<=50){
            document.getElementById("grade").innerHTML = "Your grade is D";
        }
         else if(ave>=0 && ave<=34){
           document.getElementById("grade").innerHTML = "Your grade is E";
         }
        }
    }
    function changedata(){
       document.getElementById("input").style.backgroundColor="pink"; 
     }