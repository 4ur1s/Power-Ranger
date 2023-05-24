// objeto.metodo(json)
$(document).ready(function() {
    // Formulario ingresar \\
    $('#formIngresar').validate({
        rules: {
            Correo: {
                required: true,
                Correo: true,
            },
            password: {
                required: true,
            },
        },

        messages: {
            Correo: {
                required: "El Correo es obligatorio",
                Correo: "Formato de Correo incorrecto",
            },
            password: {
                required: "La Contraseña es obligatoria",
            },
        }
    });

    // Formulario Mantenedor Usuario\\
    $('#formMantUsu').validate({
        rules: {
            id: {
                required: true,
            },
            rut: {
                required: true,
                rut: true,
            },
            nombres: {
                required: true,
                minlength: 3,
            },
            apellidos: {
                required: true,
                minlength: 3,
            },
            Correo: {
                required: true,
                email: true,
            },
            direccion: {
                required: true,
                minlength: 5,
            },
            password: {
                required: true,
                minlength: 8,
            },
        },

        messages: {
            id: {
                required: "Debe ingresar ID",
                id: "Debe ingresar ID",
            },
            rut: {
                required: "El rut es un campo obligatorio",
                rut: "El formato del rut no es válido",
            },
            nombres: {
                required: "Debe ingresar dato requerido.",
                nombres: "Debe ingresar dato requerido.",
            },
            apellidos: {
                required: "Debe ingresar dato requerido.",
                apellidos: "Debe ingresar dato requerido",
            },
            Correo: {
                required: "El Correo es obligatorio.",
                Correo: "Formato de correo incorrecto.",
            },
            direccion: {
                required: "Debe ingresar su Dirección.",
                direccion: "Debe ingresar su Dirección.",
            },
            password: {
                required: "La Contraseña es obligatoria.",
                minlength: "La Contraseña debe contener al menos 8 caracteres.",
            },
        },

        submitHandler: function(form) {
            rut();
        }
    });

    // Formulario Mis Datos\\
    $('#formMisDatos').validate({
        rules: {
            rut: {
                required: true,
                rut: true,
            },
            nombres: {
                required: true,
                minlength: 3,
            },
            apellidos: {
                required: true,
                minlength: 3,
            },
            Correo: {
                required: true,
                email: true,
            },
            direccion: {
                required: true,
                minlength: 5,
            },
            password: {
                required: true,
                minlength: 8,
            },
            password2: {
                required: true,
                equalTo: "#inputPassword1",
            },
        },

        messages: {
            rut: {
                required: "El rut es un campo obligatorio",
                rut: "El formato del rut no es válido"
            },
            nombres: {
                required: "Debe ingresar dato requerido.",
                nombres: "Debe ingresar dato requerido.",
            },
            apellidos: {
                required: "Debe ingresar dato requerido.",
                apellidos: "Debe ingresar dato requerido",
            },
            Correo: {
                required: "El Correo es obligatorio.",
                email: "Formato de correo incorrecto.",
            },
            direccion: {
                required: "Debe ingresar su Dirección.",
            },
            password: {
                required: "La Contraseña es obligatoria.",
                minlength: "La Contraseña debe contener al menos 8 caracteres.",
            },
            password2: {
                required: "Repetir la Contraseña es obligatorio.",
                equalTo: "Las Contraseñas deben coincidir.",
            },
        },

        submitHandler: function(form) {
            rut();
        }
    });

    // Formulario Mantenedor producto\\
    $('#formProducto').validate({
        rules: {
            id: {
                required: true,
            },
            categoria: {
                required: true,
            },
            nombre: {
                required: true,
                minlength: 3,
            },
            descripcion: {
                required: true,
                minlength: 10,
            },
            precio: {
                required: true,
            },
            descuentos_suscripción: {
                required: true,
            },
            descuentos_oferta: {
                required: true,
            },
        },

        messages: {
            id: {
                required: "Debe ingresar ID",
            },
            categoria: {
                required: "Debe escoger una de las 3 categorias",
                categoria: "Debe escoger una de las 3 categorias",
            },
            nombre: {
                required: "Debe ingresar el nombre de un producto",
                minlength: "Debe ingresar el nombre de un producto",
            },
            descripcion: {
                required: "Debe ingresar una descripción",
                minlength: "Debe ingresar una descripción",
            },
            precio: {
                required: "Debe ingresar un precio al producto",
            },
            descuentos_suscripción: {
                required: "Debe ingresar el descuento de suscripcion",
            },
            descuentos_oferta: {
                required: "Debe ingresar el descuento de la oferta",
            },
        },
    });

    // Formulario Mantenedor bodega\\
    $('#formbodega').validate({
        rules: {
            categoria: {
                required: true,
            },

            nombre: {
                required: true,
            },

            estado: {
                required: true,
            },

            cantidad: {
                required: true,
            }
        },

        messages: {
            categoria: {
                required: "Debe escoger una de las 3 categorias",
                categoria: "Debe escoger una de las 3 categorias",
            },

            nombre: {
                required: "Debe ingresar el nombre de un producto",
                nombre: "Debe ingresar el nombre de un producto",
            },

            estado: {
                required: "Debe agregar estado de producto",
                estado: "Debe agregar estado de producto",
            },

            cantidad: {
                required: "Debe ingresar la cantidad de productos",
                cantidad: "Debe ingresar la cantidad de productos",
            }
        }
    });

    // Formulario registro\\
    $('#formRegistro').validate({
        // Sección de reglas en base a los name
        rules: {
            rut: {
                required: true,
                rut: true,
            },
            nombres: {
                required: true,
                minlength: 3,
            },
            apellidos: {
                required: true,
                minlength: 3,
            },
            Correo: {
                required: true,
                email: true,
            },
            direccion: {
                required: true,
                minlength: 5,
            },
            password: {
                required: true,
                minlength: 8,
            },
            password2: {
                required: true,
                equalTo: "#inputPassword3",
            },
        },

        messages: {
            // el rut hay que tocarlo con script
            rut: {
                required: "El rut es un campo obligatorio",
                rut: "El formato del rut no es válido"
            },
            nombres: {
                required: "Debe ingresar dato requerido.",
                nombres: "Debe ingresar dato requerido.",
            },
            apellidos: {
                required: "Debe ingresar dato requerido.",
                apellidos: "Debe ingresar dato requerido",
            },
            Correo: {
                required: "El Correo es obligatorio.",
                email: "Formato de correo incorrecto.",
            },
            direccion: {
                required: "Debe ingresar su Dirección.",
            },
            password: {
                required: "La Contraseña es obligatoria.",
                minlength: "La Contraseña debe contener al menos 8 caracteres.",
            },
            password2: {
                required: "Repetir la Contraseña es obligatorio.",
                equalTo: "Las Contraseñas deben coincidir.",
            },
        },

        submitHandler: function(form) {
            rut();
        }
    });
});
