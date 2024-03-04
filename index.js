const pingServer = () => {
    fetch("https://trip-wiz-service.onrender.com/ping").then((res) => {
        if (res.status == 200) console.log("Server Running..");
        else console.log("Server not running..")
    });
}


setInterval(pingServer, 10000)