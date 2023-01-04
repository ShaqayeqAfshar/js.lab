
// XMLHTTPRequest
let req = new XMLHttpRequest();
req.open("GET", "https://jsonplaceholder.ir/postss");
req.addEventListener("readystatechange", getData)
req.send();
function getData() {
    if (req.readyState === 4 && req.status === 200) {
        let data = JSON.parse(req.response);
        render(data)
    } 

    if(req.status !== 200) {
        alert("با حطا مواجه شدیم!!!")
    }

}

// promise
function promis() {
  let prom = new Promise(function (resolve, reject) {
    reject("ok");
  });

  prom
    .then((resronse) => {
      console.log(resronse);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
}

// chain 
function then() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// async await es7
async function getData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("done")
    }
  
}

// axios   method get
function axiosget() {
  axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    console.log(res.data);
  });
}

// axios   method post
function axiospost(){
    axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      userId:210,
  
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur"
    })
    .then((res) => {
      console.log(res.data);
    });
}


