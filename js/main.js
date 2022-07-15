var metrosTotales = document.getElementById('mtsTotales');
var metrosCubiertos = document.getElementById('mtsCubiertos');
var manzana = document.getElementById('manzana');
var casa = document.getElementById('casa');
var numeroLote = document.getElementById('numeroLote');
var calle = document.getElementById('calle');

var form = document.getElementById('form');

form.addEventListener('submit',function(evt){
    evt.preventDefault();

    if(metrosTotales.value == null || metrosTotales.value == '' || metrosTotales.value < 0){
        Swal.fire({
            title: 'Datos incompletos',
            text: 'Ingrese metros totales',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            width: '30%',
            position: 'top'
        })
    }else if(mtsCubiertos.value == null || mtsCubiertos.value == '' || mtsCubiertos.value < 0){
        Swal.fire({
            title: 'Datos incompletos',
            text: 'Ingrese metros cubiertos',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            width: '30%',
            position: 'top'
        })
    }else if(manzana.value == null || manzana.value == '' || manzana.value < 0){
        Swal.fire({
            title: 'Datos incompletos',
            text: 'Ingrese numero de manzana',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            width: '30%',
            position: 'top'
        })
    }else if(casa.value == null || casa.value == '' || casa.value < 0){
        Swal.fire({
            title: 'Datos incompletos',
            text: 'Ingrese numero de casa',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            width: '30%',
            position: 'top'
        })
    }else if(numeroLote.value == null || numeroLote.value == '' || numeroLote.value < 0){
        Swal.fire({
            title: 'Datos incompletos',
            text: 'Ingrese numero de lote',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            width: '30%',
            position: 'top'
        })
    }else if(calle.value == null || calle.value == ''){
        Swal.fire({
            title: 'Datos incompletos',
            text: 'Ingrese nombre de la calle',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            width: '30%',
            position: 'top'
        })
    }else{
        Swal.fire({
            
            text: ' Datos ingresados',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            width: '30%',
            position: 'top'
        })
    }
});






