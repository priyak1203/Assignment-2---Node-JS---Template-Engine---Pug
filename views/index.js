console.log("Script Loaded!!!"); 

let btnPlayers = document.getElementById('btn-players');


btnPlayers.onclick = function() {
    console.log("clicked");
    location.assign('/playerPage');
}