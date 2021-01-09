function hospitalParser() {
  const puppeteer = require("puppeteer");
  const fs = require("fs");
  const bedQuery = require('./lib/bedQuery');
  const bedQuery_excep = require('./lib/bedQuery_excep');
  let p = fs.readFileSync('./bed.json');
  let p_e = fs.readFileSync('./bed_extrahandle.json');
  let fileName = 'bedInfo';
  p = JSON.parse(p);
  p_e = JSON.parse(p_e);
  (async () => {
    const browser = await puppeteer.launch({
      headless: true
    });

    const page = await browser.newPage();

    let info = [];
    let data = {};
    /*page.on("request", request => {
      if (
        ["image", "font"].indexOf(
          request.resourceType()
        ) !== -1
      ) {
        request.abort();
      } else {
        request.continue();
      }
    });*/

    for (let i = 0; i < p.length; i++) {
      console.log("going to " + p[i]['url']);
      await page.goto(p[i]['url'], {
        waitUntil: "domcontentloaded",

      });
      data = {
        hosp: p[i]['hosp'],
        city: p[i]['city'],
        info: await page.evaluate(bedQuery)

      }
      console.log(data);
      info.push(data);
    }
    for (let i = 0; i < p_e.length; i++) {
      console.log("going to " + p[i]['url']);
      await page.goto(p_e[i]['url'], {
        waitUntil: "networkidle2",
        timeout: 0
      });
      data = {
        hosp: p_e[i]['hosp'],
        city: p_e[i]['city'],
        info: await page.evaluate(bedQuery_excep)
      }
      info.push(data);
    }
    //if (!fs.existsSync("./data")) fs.mkdirSync("./data");
    //write data to json
    info.push('haiya');
    fs.writeFileSync(fileName + '.json', JSON.stringify(info), {
      flag: "w"
    });
    console.log('Saved as ' + fileName + '.json');
    await browser.close();
  })();
}

module.exports = hospitalParser;