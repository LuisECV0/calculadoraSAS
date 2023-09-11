const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item)=>{

    //para reconocer a q boton se le da click
    item.onclick=()=>{
        //limpiar todo
        if(item.id=="clear"){
            display.innerText="";
        }//limpiar 1 elemento
        else if(item.id=="backspace"){
            let string = display.innerText.toString();
            display.innerText=string.substr(0,string.length-1);
        }
        else if(display.innerText != "" && item.id=="equal"){
            display.innerText= eval(display.innerText);
        }
        else if(display.innerText == "" && item.id=="equal"){
            display.innerText = "Null";
            setTimeout(()=>(display.innerText=""),2000); 
        }
        else{
            display.innerText += item.id;
        }


    };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark= true;

themeToggleBtn.onclick=()=>{
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
}

/*funciones JS:
var respuesta = Math.pow(n2,n1);
//para potencias, en este caso 4 elevando a 2
console.log("mensaje");
//para mostrar mensajes por consola
alert("hola")
//muestra alertas en la pantalla
var i=0;
while(i<10){
    i++;
    alert(i);
}
//bucle while
for (var i=0 ; i<10 ; i++) {
alert(i);
}
//bucle for
//////////////////////////DOM////////////////////////////////////////////////
document.getElementById("id");
//para capturar el valor de un id
parsefloat();
//convierte a decimal 
btncalcular.addEventListener("click",calcular);
//añade eventos, en este caso al dar click al boton calcula el resultado
display.innerText.toString()
//para convertir una cadeta a texto


 */