ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.83228711, 49.13113504],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark([55.82909876, 49.11740213], {
            hintContent: 'ParkHouse'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/mapIcon.png',
            iconImageSize: [300, 226],
            iconImageOffset: [-235, -226]
        });

    myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);
});