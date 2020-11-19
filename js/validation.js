// VALIDACAO DE LOGIN
function login(){

    let retorno = true;

        let idUser = document.getElementById("idUser").value;
        let pass = document.getElementById("pass").value;

        if((idUser == "") || (idUser != "@R4431314v")){
            document.getElementById("idUser").style.border = "1px solid red";
            document.getElementById("h4").innerHTML = "ID ou senha inválidos!";
            return false
        }else{
            document.getElementById("idUser").style.border = "1px solid green"; 
        } 
        
        if((pass == "") || (pass != "@R4431314v")){
            document.getElementById("pass").style.border = "1px solid red";
            document.getElementById("h4").innerHTML = "ID ou senha inválidos!";
            return false;
        }else{
            document.getElementById("pass").style.border = "1px solid green";
        }

    return retorno;

}

// FORM SUBMISSION VALIADATION
function caracter(field){

    let fieldIndex = field.length;

    document.getElementById("h6").innerHTML = "Caracter " +fieldIndex+ "/500";

}

function sendsForm(){

    let retorno = true;

        let name = document.getElementById("name");
        let tel = document.getElementById("tel");
        let email = document.getElementById("email");
        let text = document.getElementById("text");

        if(name.value == ""){
            document.getElementById("name").style.border = "1px solid red";
            document.getElementById("h4").innerHTML = "Campo nome deve ser preenchido!";
            return false;
        }else{
            document.getElementById("name").style.border = "1px solid green";
        }

        if(tel.value.length != 11){
            document.getElementById("tel").style.border = "1px solid red";
            document.getElementById("h4").innerHTML = "Telefone inválido!";
            return false;
        }else{
            document.getElementById("tel").style.border = "1px solid green";
        }
        
        if(((email.value.indexOf("@") == -1) || (email.value.indexOf("é") != -1) || (email.value.indexOf("ç") != -1) || (email.value.indexOf("ã") != -1) || (email.value.indexOf("ê") != -1))){
            document.getElementById("email").style.border = "1px solid red";
            document.getElementById("h4").innerHTML = "E-mail inválido!";
            return false;
        }else{
            document.getElementById("email").style.border = "1px solid green";
        } 
        
        if(text.value.length > 500 || text.value.length < 100){
            document.getElementById("text").style.border = "1px solid red";
            document.getElementById("h4").innerHTML = "Campo de menssagem deve conter mais de 100, e menos de 300 caracter!";
            return false;
        }else{
            document.getElementById("text").style.border = "1px solid green";
            document.getElementById("h4").style.color = "green";
            document.getElementById("h4").innerHTML = "Enviado com sucesso!"
        }

    return retorno;
    
}