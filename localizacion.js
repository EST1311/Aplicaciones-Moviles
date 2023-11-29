
function consultaUbicacion() {
        navigator.geolocation.getCurrentPosition(function(ubicacion){
        console.log(ubicacion);

        var latitud = ubicacion.coords.latitude;
        var longitud = ubicacion.coords.longitude;
    
    const url = "http://nominatim.openstreetmap.org/reverse?format=json&addressdetails=1&accept-language=es&zoom=18&lat="+latitud+"&lon="+longitud;

    $.getJSON(url).done(function(direccion){
        console.log(direccion);
        console.log("Te has conectado desde: "+direccion.address.city+" / "+direccion.address.state);
    });
    
});    

}