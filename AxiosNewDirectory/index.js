// ---- Promise Then ---- //
function makeRequest(){
    console.log("button Clicked");
    config = {
        method: "get",
        url: "index.json"
    }
    const promiseObj = axios(config);
    promiseObj.then((res) => {
        console.log(res.data.name);
        console.log(res.data.Age);
    }).catch((error)=> {
        console.log(error);
    })
}

// ---- Promise Async And Await ---- //
/*
async function makeRequest(){
    try{
    config = {
        method: "get",
        url: "index.json"
    } 
    const res = await axios(config);
    console.log(res.data.name);
    console.log(res.data.Age);
    }catch(error){
        console.log(error);
    }
}
*/