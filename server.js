const pingTripwizServer = () => {
    fetch("https://trip-wiz-service.onrender.com/ping").then((res) => {
        if (res.status == 200)
          console.log("Sucess : Tripwiz server running.. ");
        else console.log("ERROR !! : Tripwiz server not running..");
    });
}

const pingCircleCronjob = () => {
    let url = "https://circle-cronjob.onrender.com/ping";
    fetch(url).then((res) => {
      if (res.status == 200) console.log("Sucess : circle cronjob running.. ");
      else console.log("ERROR !! : circle cronjobnot running..");
    });
}

const pingServer = () => { 
    pingCircleCronjob();
    pingTripwizServer();
}


setInterval(pingServer, 50000)

const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors())
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
