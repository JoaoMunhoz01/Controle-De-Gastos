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
selectGasto();