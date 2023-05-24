
// API del Producto
$(document).ready( () => {
        
    $.get('https://fakestoreapi.com/products', (data) => {
        
        $.each(data, (i, item) => {
            let filas = `<div class="card col-sm-12 col-md-6 col-lg-3" style="width: 18rem;">
            <div class="card-body">
                <img src="${item.image}" class="card-img-top w-25" alt="saco de alimento">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text text-success">DISPONIBLE EN BODEGA</p>
                <del class="card-title">${item.price+50+i}</del> <h4 class="card-title">${item.price}</h4> 
                <p class="card-text">Descripción: </p>
                <p class="card-text">${item.description} <br> En Stock: ${item.rating.count} unidades</p>
                <a href="./ficha-producto.html" class="btn btn-danger">Canjear</a>
                <a href="#" class="btn btn-secondary">Agregar al carrito</a>
            </div>
        </div>
            `
            $('#productos').append(filas);
        })
    })
});
