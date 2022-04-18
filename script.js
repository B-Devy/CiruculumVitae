var cercleG = document.getElementById('cercleG')
var cercleD = document.getElementById('cercleD')


function encercleur(cc, valeur) {
    var num = 0;
    var num1 = 0;
    var couleur = "var(--ombre)" 
   
    

    var id = setInterval(frame, 5);
    function frame() {
        
        if (num == valeur /*360max*/) {
            clearInterval(id)
        } else if (num > 180) {
            couleur = ""
            num++
            num1++
            cc.style.backgroundImage = "linear-gradient("+ num1 +"deg, transparent 50%, var(--orange1) 50%), linear-gradient(180deg, var(--orange1) 50%, transparent 50%)"
            cc.querySelector('p').innerHTML = Math.floor((num / 360) * 100) + "%";
        } else {
            num++
            cc.style.backgroundImage = "linear-gradient(180deg, transparent 50%," + couleur + "50%), linear-gradient(" + num + "deg, var(--orange1) 50%, transparent 50%)"
            cc.querySelector('p').innerHTML = Math.floor((num / 360) * 100) + "%";
        }
    }

    
}
encercleur(cercleG, 200);
encercleur(cercleD, 288);

/*--------JAUGES--------*/

var jauges = document.getElementsByClassName('jauge');

function jaugeur(elem, valeur) {
    var id = setInterval(frame2, 5);
    var num = 0;
    function frame2() {
        if(num == valeur) {
            clearInterval(id)
        } else {
            num++;
            elem.style.width = num + "%"
            
        }
    }
}



setTimeout(function() {
    return jaugeur(jauges[0], 90)
}, 500);
setTimeout(function() {
    return jaugeur(jauges[1], 75)
}, 1000);
setTimeout(function() {
    return jaugeur(jauges[2], 25)
}, 1500);
setTimeout(function() {
    return jaugeur(jauges[3], 95)
}, 2000);
setTimeout(function() {
    return jaugeur(jauges[4], 60)
}, 2500);
setTimeout(function() {
    return jaugeur(jauges[5], 50)
}, 3000);

setTimeout(function() {
    document.querySelector('#portrait img').style.opacity = 0;
}, 1000)


  



















