
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

        document.getElementById("usernameLog").value ="";
        document.getElementById("passwordLog").value = "";

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
                    window.location.replace('../views/home.html');
                }
                else {
                    alert(result.responseMessage);
                }
            })
            .catch(error => console.log('error', error));
        
        selectGasto();
    }
}

async function register() {
    if (document.getElementById("usernameReg").value == "" ||
        document.getElementById("passwordReg").value == "" ||
        document.getElementById("fNameReg").value == "" ||
        document.getElementById("lNameReg").value == "") {
        alert("Preencha os campos");
    } else {
        if (document.getElementById("passwordReg").value != document.getElementById("passwordRegConf").value) {
            alert('As senhas não correspondem');
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
            document.getElementById("usernameReg").value ="";
            document.getElementById("passwordReg").value = "";
            document.getElementById("passwordRegConf").value = "";
            document.getElementById("fNameReg").value ="";
            document.getElementById("lNameReg").value = "";
    
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
}

async function addGasto(){
    if (document.getElementById("nomeGasto").value == "" ||
        document.getElementById("valGasto").value == "" ||
        document.getElementById("dtvencGasto").value == "")  {

        alert("Preencha os campos");

    } else {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var teste = {
            "Nome": document.getElementById("nomeGasto").value,
            "Valor": document.getElementById("valGasto").value,
            "Datavenc": document.getElementById("dtvencGasto").value,
            "User": "joao.munhoz"
        }

        document.getElementById("nomeGasto").value ="";
        document.getElementById("valGasto").value = "";
        document.getElementById("dtvencGasto").value = "";

        var raw =  JSON.stringify({
        "myData": {
            "Gasto": {
                "Nome": teste.Nome,
                "Valor": teste.Valor,
                "Datavenc": teste.Datavenc,
                "User": teste.User
            }
        }
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        await fetch("http://localhost:2001/registerGasto", requestOptions)
        .then(response => response.json())
            .then(results => {
                if (results.status == 1) {
                selectGasto();
            } else {
            }
        })
        .catch(error => console.log('error', error));
    }
}
async function selectGasto(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "myData": {
        "Gasto": {
        "User": "joao.munhoz"
        }
    }
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    await fetch("http://localhost:2001/gastos", requestOptions)
        .then(response => response.json())
            .then(results => {
                if (results.status == 1) {

                    let nrow = results.responseBody.rowCount;
                    let rowArray = results.responseBody.rows;

                    let table = document.getElementById('tablegastos');
                    var flag = true;
                    console.log(table.rows.length);
    
                    for (let index = 0; index < nrow ; index++) {
                        flag = true;

                        for (let index1 = 2; index1 < table.rows.length; index1++) {
                            
                            if (table.rows[index1].cells[0].firstChild.data == rowArray[index].id) {
                                flag = false;
                            } 
                        }
                        if (flag) {
                            addRow('tablegastos', rowArray[index].id, rowArray[index].nome, rowArray[index].valor, rowArray[index].dtvenc);
                        }
                    }
            } else {
                
            }
        })
        .catch(error => console.log('error', error));

}

//addRow('tablegastos', rowArray[index].id, rowArray[index].nome, rowArray[index].valor, rowArray[index].dtvenc);