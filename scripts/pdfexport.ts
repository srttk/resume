import puppeteer, { Device } from "puppeteer";
import path from "path";

const distDir = path.resolve(".");

async function printPDF(url: string, outputPath: string) {
  // Launch the browser
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Navigate to the URL
  await page.goto(url, { waitUntil: "networkidle2" });

  // Generate PDF

  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: false,
    preferCSSPageSize: true,
    displayHeaderFooter: true,
  });

  // Close the browser
  await browser.close();
}

const options = {
  url: `file://${distDir}/dist/index.html`,
  print: true,
  output: "sarath-tk-resume.pdf",
};

printPDF(options.url, options.output)
  .then(() => {
    console.log("🔥🔥 📎 Pdf generated 👶 💥 📃 🔥🔥");
  })
  .catch((e) => {
    console.error("Error generating PDF ", e);
  });
