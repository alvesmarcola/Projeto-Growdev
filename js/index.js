const myModal = new bootstrap.Modal("#register-modal"); 
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");


//CRIAR A CONTA DO USUÁRIO

document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;


    if(email.length < 12) {
        alert ("Digite um email válido!");
        return
    }

    if(password.length < 6) {
        alert ("Sua senha deve conter no mínimo 6 caracteres!");
        return
    }

    saveAccount({
        login : email,
        password : password,
        transactions : []
    })

    myModal.hide();

    alert("Conta criada com sucesso!");
});

function checkLogged (){
    if(session){
        sessionStorage.setItem("logged", session);
        logged = session;
    }
    if(logged){
        saveSession(logged, session);
        window.location.href="home.html";
    }
}

function saveAccount (data){
    console.log(data);
    localStorage.setItem(data.login, JSON.stringify(data))
}

//Logar no sistema//

document.getElementById ("login-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const checkSession = document.getElementById("session-check").checked;

    const account = getAccount(email);

    if(!account){
        alert ("Opa! Verifique seu usuário ou senha.");
        return;
    }

    if (account){
        if(account.password !== password){
        alert("Ops, sua senha está incorreta.");
        return; 
        }

        saveSession (email, checkSession); 

        window.location.href = "home.html";
    }

    checkLogged();

    //console.log(email, session);//

});

function getAccount (key){
    const account = localStorage.getItem(key);

    if (account){
        return JSON.parse(account);
    }

    return ""

}

function saveSession (data, saveSession){
    if (saveSession){
        localStorage.setItem("session", data);
    }

        sessionStorage.setItem("logged", data);

}