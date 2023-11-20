// mapa.js

function inicializarMapa() {
    var coordenadas = { lat: -34.8838, lng: -60.7029 }; // Reemplaza con las coordenadas de tu comercio
    var mapa = new google.maps.Map(document.getElementById('mapa'), {
      center: coordenadas,
      zoom: 15, // Ajusta el nivel de zoom según sea necesario
    });
  
    var marcador = new google.maps.Marker({
      position: coordenadas,
      map: mapa,
      title: 'Mi Comercio', // Reemplaza con el nombre de tu comercio
    });
  }
  