function GetTime(){
    var now=new Date()
    var hour=now.getHours();
    var minute=now.getMinutes();
    var second=now.getSeconds();
 

    var day=now.getDate();
    var month=now.getMonth()+1;
    var year=now.getFullYear();


    document.getElementById("date").innerText=day+" / "+month+" / "+year;


   if(hour<10) 
   {
    document.getElementById("hour").innerText="0"+hour;
    }else{
    document.getElementById("hour").innerText="0"+hour;
    }

   if(minute<10){
    document.getElementById("minute").innerText="0"+minute;
    } else{
    document.getElementById("minute").innerText=minute;
    }

    if(second<10){
     document.getElementById("second").innerText="0"+second;
    }else{
        document.getElementById("second").innerText=second;
    }

};

setInterval(function(){
    GetTime();},1000);

