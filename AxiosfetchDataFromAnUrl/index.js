// ---- Promise Then ---- //
/*
function makeRequest(){
    console.log("button Clicked");
    config = {
        method: "get",
        url: "https://dummyjson.com/products"
    }
    const promiseObj = axios(config);
    promiseObj.then((res) => {
        console.log(res.data.products);
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
        url: "https://dummyjson.com/products"
    } 
    const res = await axios(config);
    const output = document.getElementById("divData");
    res.data.products.forEach(element => {
        output.innerHTML += `
        <div>ID: ${element.id}</div>
        <div>Title: ${element.title}</div>
        <div>Body: ${element.description}</div> <hr>
        `
    });
    // console.log(res.data.name);
    // console.log(res.data.Age);
    }catch(error){
        console.log(error);
    }
}
