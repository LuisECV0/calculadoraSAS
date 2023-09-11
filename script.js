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




    }
})