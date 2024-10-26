import { createPDF } from "./createPDF.js";
import path from "path";

const distDir = path.resolve(".");

const options = {
  url: `file://${distDir}/dist/index.html`,
  //url: 'http://saratonite.github.io/resume/',
  print: true,
  output: "sarath-tk-resume.pdf",
};

createPDF(options).then(function (data) {
  console.log("🔥🔥 📎 Pdf generated 👶 💥 📃 🔥🔥");
});
