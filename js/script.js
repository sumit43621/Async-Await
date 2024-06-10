var baseURL = 'https://fakerestapi.azurewebsites.net';

function callApi(){
    return new Promise(function(resolve,reject){
        let xhr = new XMLHttpRequest();
        xhr.open("GET",`${baseURL}/api/v1/USers`)
        xhr.send()
        xhr.onreadystatechange = function (){

            if ( (xhr.readyState == 4) && (xhr.status == 200) ){
                resolve(JSON.parse(xhr.responseText));
            }
            if(xhr.status != 200){
                reject('error')
            }
        }
    })
}

async function getMyUser(){

    let data = await callApi()
    console.log(data);
}

getMyUser();