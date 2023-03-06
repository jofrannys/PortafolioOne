const fila = document.querySelector('.carrosel__principal');
const cajas = document.querySelectorAll('.caixa__card');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
})

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
})

const numeroPaginas = Math.ceil(cajas.length /2);
for (let i = 0; i < numeroPaginas; i++){
    const indicador = document.createElement('button');
    if (i === 0 ){
        indicador.classList.add('activo');
    }

    document.querySelector('.indicadores').appendChild(indicador);

    
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;
        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    })
}

cajas.forEach( (caixa__card)=> {
    caixa__card.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            cajas.forEach(caixa__card => caixa__card.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 200)
    })
})

fila.addEventListener('mouseleave', () => {
    cajas.forEach(caixa__card => caixa__card.classList.remove('hover'));
})