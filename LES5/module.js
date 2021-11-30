import * as fs from 'fs/promises';

let results = await fs.readFile('boardgames.json');
let data = JSON.parse(results);


for (let i in data) {
    let filename = `${i}.json`
    let boardgames = JSON.stringify(data[i])
    await fs.writeFile(filename, boardgames);

}