async function login() {
    if (document.getElementById("usernameLog").value == "" ||
        document.getElementById("passwordLog").value == "") {

        alert("Preencha os campos");

    } else {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "myCredentials": {
                "Person": {
                    "User": document.getElementById("usernameLog").value,
                    "Password": document.getElementById("passwordLog").value,
                }
            }
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:2001/login", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status == 1) {
                    alert("Deu certo");
                }
                else {
                    alert(result.responseMessage);
                }
            })
            .catch(error => console.log('error', error));
    }
}
async function register() {
    if (document.getElementById("usernameReg").value == "" ||
        document.getElementById("passwordReg").value == "" ||
        document.getElementById("fNameReg").value == "" ||
        document.getElementById("lNameReg").value == "") {
        alert("Preencha os campos");
    } else {
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
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:2001/register", requestOptions)
            .then(response => response.json())
            .then(result => {
                alert(result.responseMessage);
            })
            .catch(error => console.log('error', error));
    }
}
