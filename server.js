const pingServer = () => {
    fetch("https://trip-wiz-service.onrender.com/ping").then((res) => {
        if (res.status == 200)
          console.log("Sucess : Tripwiz server running.. ");
        else console.log("ERROR !! : Tripwiz server not running..");
    });
}


setInterval(pingServer, 10000)

const express = require("express");
const app = express();

const pingRoute = (req, res) => { 
    console.log("Ping request recevied..");
    res.status(200).send("cronjob server active..");
}
app.use("/ping", pingRoute);

// Start the server
app.listen(3000, () => {
  console.clear();
  console.log(`Server is running on port 3000`);
});
