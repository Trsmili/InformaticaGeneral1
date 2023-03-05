alert('VAMOS A JUGAR');

function resultado() {

	var p1 , p2 , p3 ,p4 ,nota;

    if (document.getElementById('pp3').checked==true)
 	{p1=5}
 	else{p1=0}

    if(document.getElementById('pp4').checked==true)
    {p2=5}
    else {p2=0}

    if(document.getElementById('pp8').checked==true)
    {p3=5}
    else{p3=0}

    if (document.getElementById('pp12').checked==true)
        {p4=5}
    else{p4=0}

nota = p1 + p2 + p3 + p4;
alert("aciertos:" + nota );

if (nota< 10) {
    alert("perdiste");
}
else{
    alert("Ganaste");
}

 }






