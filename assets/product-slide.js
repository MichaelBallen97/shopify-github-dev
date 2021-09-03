window.addEventListener('load', function(){
    new Glider(document.querySelector('.slider-contenedor'), {
        slidesToShow: 1,
        draggable: true,
        arrows: {
          prev: '.prevs',
          next: '.nexts'
        }
      });
})