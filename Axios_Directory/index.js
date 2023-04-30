// ---- Promise Then ---- //
/*
function makeRequest(){
    console.log("button Clicked");
    config = {
        method: "get",
        url: "index.txt"
    }
    const promiseObj = axios(config);
    promiseObj.then((res) => {
        console.log(res.data , "res");
    }).catch((error)=> {
        console.log(error);
    })
}
*/

// ---- Promise Async And Await ---- //
async function makeRequest(){
    try{
    config = {
        method: "get",
        url: "index.txt"
    } 
    const res = await axios(config);
    console.log(res.data);
    }catch(error){
        console.log(error);
    }
}