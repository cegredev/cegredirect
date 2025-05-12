const express = require("express");
const { redirects } = require("./redirects.js");

const app = express();

app.get("*path", (req, res) => {
	const cleanedPath = req.path.substring(1); // Remove leading slash
	const target = redirects[cleanedPath];

	if (target) {
		res.redirect(301, target);
	} else {
		res.status(404).send("Not found");
	}
});

app.listen(3000, () => console.log("Redirector running on port 3000"));
