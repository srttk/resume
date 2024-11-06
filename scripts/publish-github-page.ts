import ghpages from "gh-pages";

const d = new Date();

const consoleMessage = process.argv[2] || ":dog: blah blah";

const message = `${consoleMessage}, :rocket: Build  : ${d.toJSON()}`;

const options = {
  message: message,
};

ghpages.publish("./dist", options, function (err) {
  if (err) {
    console.log(err);
    console.log(`😠😠😠 Something went wrong 😭`);
    return;
  }
  console.log("▶ Site Published 🚀 🔥🔥🔥 ");
});
