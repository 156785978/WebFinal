const puppeteer = require("puppeteer");
const fs = require("fs");
const bedQuery = require('./lib/bedQuery');
let p = fs.readFileSync('./data/bed.json');
p = JSON.parse(p);

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });

  const page = await browser.newPage();

  let info = [];
  let data = {};
  page.on("request", request => {
    if (
      ["image", "font"].indexOf(
        request.resourceType()
      ) !== -1
    ) {
      request.abort();
    } else {
      request.continue();
    }
  });

  for (let i = 0; i < p.length; i++) {
    console.log("going to " + p[i]['url']);
    await page.goto(p[i]['url'], {
      waitUntil: "networkidle2",
      timeout: 0
    });
    data = {
      hosp: p[i]['hosp'],
      city: p[i]['city'],
      info: await page.evaluate(bedQuery)

    }
    info.push(data);
  }

  if (!fs.existsSync("./data")) fs.mkdirSync("./data");
  //write data to json

  fs.writeFileSync(`./data/d.json`, JSON.stringify(info), {
    flag: "w"
  });
  console.log(`Saved as data/d.json`);
  await browser.close();
})();