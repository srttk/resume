import "./styles/index.scss";
import packageJson from "../package.json";

console.log("⚡️" + packageJson.description);
console.log("Version : ", packageJson.version);
console.log("%c 🔥 Oh my heavens! ⚡️ ", " color: #5755d9; font-size:30px;");

document.addEventListener("DOMContentLoaded", () => {
  const currentYearSpan = document.querySelector("#current-year");
  const now = new Date();
  currentYearSpan.textContent = now.getFullYear();

  // Set back to home button

  if (
    window.location &&
    window.location.search.trim() === "?utm_source=sarath.tk"
  ) {
    const gobackOrigin = document.querySelector("#go-back-origin");
    gobackOrigin.href = "https://sarath.tk";
  }
});
