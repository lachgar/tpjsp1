
function charger(){
    console.log($('#marque').val);
}
function load(){
    document.getElementById("marque").addEventListener('change', charger);
}

window.addEventListener('load', load);

