if (document.querySelector('#map')){
    google.maps.event.addDomListener(window, 'load', init);
    function init() {
        var mapOptions = {
            zoom: 11,
            center: new google.maps.LatLng(59.934293, 30.335124),
            styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#86a77a"},{"visibility":"on"}]}]
        };

        var mapElement = document.getElementById('map');
        
        var map = new google.maps.Map(mapElement, mapOptions);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(59.934293, 30.335124),
            map: map,
            title: ''
        });
    }
}