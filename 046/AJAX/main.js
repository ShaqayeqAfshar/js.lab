
// AJAX
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



