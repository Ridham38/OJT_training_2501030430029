const express = require('express');
const app = express();
app.get('/', (req, res) => {
 console.log("Request received");
 setTimeout(() => {
 console.log("Timeout callback");
 }, 2000);
 console.log("Synchronous code executed");
 res.send("Response sent");
});
app.listen(3000, () => {
 console.log("Server is running on port 3000");
});