
function charger(){
    console.log(document.getElementById("marque").value);
}
function load(){
    document.getElementById("marque").addEventListener('change', charger);
}

window.addEventListener('load', load);

