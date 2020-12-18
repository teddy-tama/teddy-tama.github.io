let angkaInput = document.getElementById("angka")
let tekanTombol = document.getElementById("tekan")

function angkaPrima(angka) {
    let pembagi = 0
    for (let i = 1; i <= angka; i++){
    if (angka % i === 0){
        pembagi++
    }
    }
    if (pembagi === 2){
    return "Prima"
    }else{
    return "bukan Prima"
    }
}
// console.log(document.getElementById("angka").value);
tekanTombol.addEventListener("click", function()  {
    let masukan = Number(document.getElementById("angka").value)
    let output = document.getElementById("output")
console.log(angkaPrima(masukan))
output.innerHTML = `${masukan} adalah bilangan ${angkaPrima(masukan)}`
});