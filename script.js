
function display()
{
    let date=new Date();
    let hr=date.getHours();
    let mins=date.getMinutes();
    let sec=date.getSeconds();
    if(hr>12)
    {
        hr=hr-12;
        document.getElementById("amorpm").innerHTML='PM';
    }
    document.getElementById("hours").innerHTML=padZero(hr);
    document.getElementById("mins").innerHTML=padZero(mins);
    document.getElementById('sec').innerHTML=padZero(sec);
}

function padZero(num)
{
    return num<10 ? "0"+num : num
}

setInterval(display,500)