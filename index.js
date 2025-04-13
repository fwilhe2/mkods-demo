const fs = require('fs');

function stringCell(value) {
    return {
        "value": value.toString(),
        "type": "string"
    }
}

const kontoJson = JSON.parse(fs.readFileSync('konto.json').toString())

let transaktionen = [[
    stringCell("ID"),
    stringCell("Beschreibung"),
    stringCell("Betrag"),
    stringCell("Währung"),
]].concat(kontoJson.konto.transaktionen.map(t => {
    return [
        {
            "value": t.transaktionsID.toString(),
            "type": "string"
        },
        {
            "value": t.details.beschreibung.toString(),
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

}))


const spreadsheetJson = JSON.stringify(transaktionen)

fs.writeFileSync("konto-spreadsheet.json", spreadsheetJson)