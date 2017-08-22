var vue = require('vue');
var domotica = new Vue({
  el: '#productos',
  data: {
    productos: [
      {
        imgsrc: 'https://tuhogarinteligente.cl/inmobi/townhouse-chicureo/assets/images/productos/hcl.jpg',
        title: 'Home Center Lite',
        cant: '1 Unidad',
        desc: 'Controlador principal del sistema FIBARO',
        link: 'https://tuhogarinteligente.cl/home-center-lite/'
      },
      {
        imgsrc: './assets/images/productos/smoke-sensor.jpg',
        title: 'Smoke Sensor',
        cant: '1 Unidad',
        desc: 'Detecta humo y cambios drásticos de temperatura, activando la alarma.',
        link: 'https://tuhogarinteligente.cl/producto/sensor-de-humo/'
      },
      {
        imgsrc: 'https://tuhogarinteligente.cl/inmobi/townhouse-chicureo/assets/images/productos/motion-sensor.jpg',
        title: 'Motion Sensor',
        cant: '1 Unidad',
        desc: 'Detecta el más mínimo movimiento, temperatura, vibración e intensidad de luz.',
        link: 'https://tuhogarinteligente.cl/sensor-de-movimiento/'
      },
      {
        imgsrc: './assets/images/productos/dw-sensor.jpg',
        title: 'Door Window Sensor',
        cant: '1 Unidad',
        desc: 'Detecta apertura de ventanas y puertas. Informa al controlador y envía una notificación a su dispositivo móvil.',
        link: 'https://tuhogarinteligente.cl/producto/sensor-puerta-ventana/'
      },


    ],
  }
});
