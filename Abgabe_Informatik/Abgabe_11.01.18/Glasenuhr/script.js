function myFunction() 
{
    var stunde = document.getElementById("hour").value;
    var minute = document.getElementById("minute").value;
    
    if(minute < 30)
    {
         minute = 0;
    }   
    else if(minute >= 30 && minute < 60)
    {
         minute = 30;
    }   
    
    if(stunde > 23 || minute >= 60)
    {
        alert("Falsche Eingabe");
    }  
    else
    {
        ring(stunde, minute);
    }
}

function ring(stunde, minute)
{    
    if(stunde % 4 == 0 && minute == 0)
        alert("8");
    else if(stunde % 4 == 0 && minute == 30)
        alert("1");
    else if(stunde % 4 == 1 && minute == 0)
        alert("2");
    else if(stunde % 4 == 1 && minute == 30)
        alert("3");
    else if(stunde % 4 == 2 && minute == 0)
        alert("4");
    else if(stunde % 4 == 2 && minute == 30)
        alert("5");
    else if(stunde % 4 == 3 && minute == 0)
        alert("6");
    else if(stunde % 4 == 3 && minute == 30)
        alert("7");
}