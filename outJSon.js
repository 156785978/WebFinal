const fs = require('fs');
const readline = require('readline');
const r = [];
async function processLineByLine() {
    const fileStream = fs.createReadStream('./data/bed2.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (let line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        //console.log(`Line from file: ${line}`);

        line = line.split(' ');
        let d = {
            hosp: line[0],
            city: line[1],
            url: line[2]
        };
        r.push(d);
    }
    console.log(r);
    if (!fs.existsSync("./data")) fs.mkdirSync("./data");
    //write data to json

    fs.writeFileSync(`./data/bed2.json`, JSON.stringify(r), {
        flag: "w"
    });
    console.log(`Saved as data/bed.json ya`);
}

processLineByLine();