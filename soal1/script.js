// lanjutkan script ini ya ...
let nama = document.getElementById("nama", "arif");

let hobi = ["Baca", "Bermain Game", "Belajar Coding"];
let listhobi = document.getElementById("listhobi");
hobi.forEach(showHobi);


function showHobi(value, index)
{
    console.log(value);
    listhobi.innerHTML += "<li>" + value + "</li>";
}

function showNama(value, index)
{
    console.log(value);

}