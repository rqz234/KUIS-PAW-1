// lanjutkan script ini ya ...
let nama = "Arif";
let tampilNama = document.getElementById("nama").innerText = nama;

let hobi = ["Baca", "Bermain Game", "Belajar Coding"];
let listhobi = document.getElementById("listhobi");
hobi.forEach(showHobi);
let tampilHobi = document.getElementById("hobi").innerText = hobi[2];


function showHobi(value, index)
{
    console.log(value);
    listhobi.innerHTML += "<li>" + value + "</li>";
}

function showNama(value, index)
{
    console.log(value);
}