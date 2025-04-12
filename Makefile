all:
	node index.js
	mkods -input konto-spreadsheet.json
	mkods -input konto-spreadsheet.json -flat