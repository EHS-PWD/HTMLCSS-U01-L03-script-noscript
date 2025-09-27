const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const filePath = path.resolve(__dirname, "../student-code/index.html");
const html = fs.readFileSync(filePath, "utf8");
const { document } = new JSDOM(html).window;

describe("Unit 01 - Lesson 3: Script and Noscript Tags", () => {
  test("contains an external <script> tag in <head>", () => {
    const headScript = document.querySelector("head script[src]");
    expect(headScript).not.toBeNull();
    expect(headScript.getAttribute("src")).toBe("script.js");
  });

  test("contains an inline <script> inside <body>", () => {
    const bodyScripts = document.querySelectorAll("body script");
    const inlineScript = Array.from(bodyScripts).find(
      s => !s.getAttribute("src")
    );
    expect(inlineScript).not.toBeNull();
    expect(inlineScript.textContent).toMatch(/alert\(/i);
    expect(inlineScript.textContent).toMatch(/Welcome to my interactive web page!/i);
  });

  test("contains a <noscript> tag with fallback content", () => {
    const noscript = document.querySelector("body noscript");
    expect(noscript).not.toBeNull();
    expect(noscript.textContent).toMatch(/JavaScript is disabled/i);
  });

  test("script and noscript tags are properly closed (raw HTML check)", () => {
    expect(html).toMatch(/<script[^>]*>.*<\/script>/is);
    expect(html).toMatch(/<noscript[^>]*>.*<\/noscript>/is);
  });
});
