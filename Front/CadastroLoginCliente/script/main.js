async function login() {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "myCredentials": {
            "Person": {
                "User": document.getElementById("usernameLog").value,
                "Password": document.getElementById("passwordLog").value
            }
        }
    });

    var requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:2001/login", requestOptions)
        .then(response => {
            let data = response;
            console.log(data)
            if (data.status == 1) {
                alert('DeuCerto')
            } else {
                alert('Houve um problema ' + data.responseMessage)
            }
        })
        .catch(error => alert('error', error));
}
async function register() {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "myData": {
            "Person": {
                "User": document.getElementById("usernameReg").value,
                "Password": document.getElementById("passwordReg").value,
                "fName": document.getElementById("fNameReg").value,
                "lName": document.getElementById("lNameReg").value
            }
        }
    });

    var requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:2001/register", requestOptions)
        .then(response => response.status == 1 ? alert('Cadastrado com sucesso') : alert('Houve um errro ' + response.responseMessage))
        .catch(error => alert('error', error));
}