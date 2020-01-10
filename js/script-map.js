'use strict';

ymaps.ready(function() {
   var myMap;
       myMap = new ymaps.Map("map", {
         center: [50.481737, 30.468046],
         zoom: [17],
         controls: []
      }),

      myMap.behaviors.disable("scrollZoom");
      myMap.controls.add("zoomControl");

      var myPlacemark = new ymaps.Placemark([50.481737, 30.468046], {
         hintContent: "",
         balloonContent: ""
         }, {

         iconLayout: "default#image",
         iconImageHref: "./img/icon-map-marker.svg",
         iconImageSize: [36, 36],
         iconImageOffset: [0, 0]
      });

      myMap.geoObjects.add(myPlacemark);
   });
