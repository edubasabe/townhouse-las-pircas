var $ = require('jquery');

$('#section-tipos .dropdown-menu > li').on('click', function () {
$('#section-tipos .dropdown-menu > li').toggleClass('active').siblings().removeClass('active').attr('aria-expanded', 'false');
});


//------------------------------------------------------------------------------
// VueJS
//------------------------------------------------------------------------------

var deptos = new Vue({
  el: '#section-tipos',
  data: {
    deptos: [
      {
        id: 'loft',
        class: 'tab-pane active',
        // img1: './assets/images/proyecto/piso-1.jpg',
        // img2: './assets/images/proyecto/piso-2.jpg',
        title: 'TownHouse',
        subtitle: 'Diseño en 245m2 + terrazas y jardín',
        desc: 'Terminaciones y mobiliario de vanguardia, calidad y sofisticación con un diseño que permite resolver las singularidades y prioridades de cada familia.',
      },
      {
        id: 'deptos',
        class: 'tab-pane',
        img1: './assets/images/proyecto/departamento-etapa-III.jpg',
      },
    ],

    pisos: [
      { img: './assets/images/proyecto/piso-1.jpg', title: 'Piso 1' },
      { img: './assets/images/proyecto/piso-2.jpg', title: 'Piso 2' },
      { img: './assets/images/proyecto/piso-3.jpg', title: 'Piso 3' },
      { img: './assets/images/proyecto/zocalo.jpg', title: 'Zócalo' },
    ],
  },
});
