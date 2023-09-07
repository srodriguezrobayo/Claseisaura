const Inicio = 250

const Fin = 550

var count = 0

for (var i = Inicio; i <= Fin; i++){
    var cuenta = i % i
    if (cuenta === 0){
        count += 1
        console.log (i,count) 
    }
}