var adatok = [];

$(function ()
{
    beolvas();
});

function kiir(){
    $("article").empty();
    for (var i = 0; i < adatok.length; i++) {
        var id = adatok[i].id;
        var todo = adatok[i].todo;
        var datum = adatok[i].datum;
        var allapot = adatok[i].allapot;
        var elem ="<div><p>"+id+"</p><p>"+todo+"</p><p>"+datum+"</p><p>"+allapot+"</p></div>";
        $("article").append(elem);
    }
    
}

function beolvas() {
    $.ajax({
        type: "GET",
        url: "feldolgoz.php",
        success: function (result) {
            console.log(result); 
            telefonkonyvem = JSON.parse(result);
            console.log(telefonkonyvem); 
            kiir();
        },
        error: function () {
            alert("Hiba az adatok betöltésekor!");
        }
    });
}
    
