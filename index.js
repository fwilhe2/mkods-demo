const fs = require('fs');

const foo = JSON.parse(fs.readFileSync('konto.json').toString())

fs.writeFileSync("konto-spreadsheet.json", (JSON.stringify(foo.konto.transaktionen.map(t => {
    return [
        {
            "value": t.transaktionsID.toString(),
            "type": "string"
        },
        {
            "value": t.details.betrag.wert.toString(),
            "type": "currency"
        },
        {
            "value": t.details.betrag.waehrung.toString(),
            "type": "string"
        }
    ]

}))))