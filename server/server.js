const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    res.json({"usrs": ["userOne", "userTwo", "userThree"]});
});

app.listen(3002, () => {
    console.log("Server started on port 3002");
});



