// Activación toast
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}

// Contenido dinámico en el modal 
const myModalEl = document.getElementById('ejemplo')
myModalEl.addEventListener('show.bs.modal', event => {
    // titulo es el valor del atributo del elemento que detona el evento
    titulo = event.relatedTarget.getAttribute('data-bs-contenido')

    document.getElementById('saludo').innerText = 'Hola ' + titulo

})

// Activación AOS
AOS.init();

// Activar owl carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        responsiveClass:true,
        dots: false,
        nav:false,
        responsive:{
            0:{
                items:2,
            },
            780:{
                items:3,
            },
            1200:{
                items:5,
            }
        }
    });
});