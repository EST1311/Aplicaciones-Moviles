const correo = "eduardosalazartrejo@gmail.com";
const contrasena = "test123";

function sendMessage(){

    let username_1 = document.getElementById("username");
    let password_1 = document.getElementById("password");
    let inicio = document.getElementById("inicio");
    let home = document.getElementById("home");
    let supermercado = document.getElementById("supermercado");

    if (username_1.value == correo && password_1.value == contrasena) {
        //Elimina una clase a un elemento HTML   
        username_1.classList.remove("input_fail");
        password_1.classList.remove("input_fail");   
        Swal.fire({
            title: "Acceso a Aplicación",
            text: "Tus credenciales son válidas",
            icon: "success",
            allowOutsideClick: false
        });
        inicio.style.display = 'none';
        home.style.display = 'block'; 
    }else{
        //Añade una clase a un elemento HTML   
        username_1.classList.add("input_fail");
        password_1.classList.add("input_fail");
        alert("Credenciales incorrectas, intenta de nuevo");
    }
    return false;

}

function showSupermercados(){

    let home = document.getElementById("home");
    let supermercado = document.getElementById("supermercado");
    let costco_homepage = document.getElementById("costco_homepage");
    let sams_homepage = document.getElementById("sams_homepage");
    let walmart_homepage = document.getElementById("walmart_homepage");
    let heb_homepage = document.getElementById("heb_homepage");
    
    home.style.display = 'none';    
    costco_homepage.style.display = 'none'; 
    sams_homepage.style.display = 'none'; 
    walmart_homepage.style.display = 'none'; 
    heb_homepage.style.display = 'none'; 
    supermercado.style.display = "block"
}

function showHome(){

    let home = document.getElementById("home");
    let supermercado = document.getElementById("supermercado");
    let costco_homepage = document.getElementById("costco_homepage");
    let sams_homepage = document.getElementById("sams_homepage");
    let walmart_homepage = document.getElementById("walmart_homepage");
    let heb_homepage = document.getElementById("heb_homepage");

    supermercado.style.display = "none";
    costco_homepage.style.display = 'none'; 
    sams_homepage.style.display = 'none'; 
    walmart_homepage.style.display = 'none'; 
    heb_homepage.style.display = 'none'; 
    home.style.display = 'block'; 
}

function showCostco(){

    let home = document.getElementById("home");
    let supermercado = document.getElementById("supermercado");
    let costco_homepage = document.getElementById("costco_homepage");
    let sams_homepage = document.getElementById("sams_homepage");
    let walmart_homepage = document.getElementById("walmart_homepage");
    let heb_homepage = document.getElementById("heb_homepage");

    home.style.display = 'none';    
    sams_homepage.style.display = 'none'; 
    walmart_homepage.style.display = 'none'; 
    heb_homepage.style.display = 'none';
    supermercado.style.display = "none"
    costco_homepage.style.display = 'block'; 
}

function showSams(){

    let home = document.getElementById("home");
    let supermercado = document.getElementById("supermercado");
    let costco_homepage = document.getElementById("costco_homepage");
    let sams_homepage = document.getElementById("sams_homepage");
    let walmart_homepage = document.getElementById("walmart_homepage");
    let heb_homepage = document.getElementById("heb_homepage");

    home.style.display = 'none';    
    costco_homepage.style.display = 'none'; 
    walmart_homepage.style.display = 'none'; 
    heb_homepage.style.display = 'none';
    supermercado.style.display = "none"
    sams_homepage.style.display = 'block'; 
}

function showWalmart(){

    let home = document.getElementById("home");
    let supermercado = document.getElementById("supermercado");
    let costco_homepage = document.getElementById("costco_homepage");
    let sams_homepage = document.getElementById("sams_homepage");
    let walmart_homepage = document.getElementById("walmart_homepage");
    let heb_homepage = document.getElementById("heb_homepage");

    home.style.display = 'none';    
    costco_homepage.style.display = 'none'; 
    sams_homepage.style.display = 'none'; 
    heb_homepage.style.display = 'none';
    supermercado.style.display = "none"
    walmart_homepage.style.display = 'block'; 
}

function showHeb(){

    let home = document.getElementById("home");
    let supermercado = document.getElementById("supermercado");
    let costco_homepage = document.getElementById("costco_homepage");
    let sams_homepage = document.getElementById("sams_homepage");
    let walmart_homepage = document.getElementById("walmart_homepage");
    let heb_homepage = document.getElementById("heb_homepage");
    
    home.style.display = 'none';    
    costco_homepage.style.display = 'none'; 
    sams_homepage.style.display = 'none'; 
    walmart_homepage.style.display = 'none'; 
    supermercado.style.display = "none"
    heb_homepage.style.display = 'block'; 
}

function toggleFabModal() {
    $('#fabModal').modal('toggle');
    $('#addProductModal').modal('hide');
    $('#deleteProductModal').modal('hide');
}

/* function acceso(){

    let username_1 = document.getElementById("username");
    let password_1 = document.getElementById("password");
    let inicio = document.getElementById("inicio");
    let home = document.getElementById("home");
    let supermercado = document.getElementById("supermercado");
    var user = $('#username').val();
    var pass = $('#password').val();

    const datafunction = {
        function: "login",
        user: user,
        password: pass
    }

    $.ajax({
        url: "http://172.28.75.121/AM-API/market/controller.php",
        method: 'POST',
        data: datafunction,
        encode:true,
        dataType: "json",
        success: function (response) {
            if (response.valid) {
                Swal.fire({
                    title: "Acceso a Aplicación",
                    text: "Tus credenciales son válidas",
                    icon: "success",
                    allowOutsideClick: false
                });
                inicio.style.display = 'none';
                home.style.display = 'block';
            } else {
                alert("Credenciales incorrectas, intenta de nuevo");
            }
        },
        error: function () {
            inicio.style.display = 'none';
            home.style.display = 'block';
        }
    });
}

function listSupermarkets(){

    const datafunction = {
        function: "listamercados"
    }

    $.ajax({
        url: "http://172.28.75.121/AM-API/market/controller.php",
        method: 'POST',
        data: datafunction,
        encode:true,
        dataType: "json",
      success: function (response) {
        if (response.valid) {
          displaySupermarkets(response.data);
        } else {
        alert("Supermercado invalido");
        }
      },
      error: function(){
        console.error("API Request Error");
      },
    });
}

function listProducts(){

    var market = $('#supermarket').val();

    const datafunction = {
        function: "listaProductos",
        id: market,
    }

    $.ajax({
        url: "http://172.28.75.121/AM-API/market/controller.php",
        method: 'POST',
        data: datafunction,
        encode:true,
        dataType: "json",
      success: function (response) {
        if (response.valid) {
          displayProducts(response.data);
        } else {
        alert("Supermercado invalido");
        }
      },
      error: function(){
        console.error("API Request Error");
      },
    });
} */