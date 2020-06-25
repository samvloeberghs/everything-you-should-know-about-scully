// scully-csv.js
const {
  registerPlugin
} = require('@scullyio/scully');
const csv = require('csv-parser');
const { Readable } = require('stream');

const csvPlugin = async (raw) => {

  console.log(raw);
  return new Promise((res, rej) => {

    const rows = [];
    const generateHtml = (rows) => {
      const thead = `<thead><tr><th>Firstname</th><th>Name</th></tr></thead>`;
      const tbody = `<tbody>${rows.forEach(row => {
        `<td>${row.firstName}</td><td>${row.name}</td>`;
      })}</tbody>`;
      return `<table>${thead}${tbody}</table>`;
    };

    Readable.from([raw])
      .pipe(csv())
      .on('data', (data) => rows.push(data))
      .on('end', () => {
        res(generateHtml(rows));
      })
      .on('error', (err) => rej(err));
  });

};

registerPlugin(
  'fileHandler', 'csv', csvPlugin
);
exports.csvPlugin = csvPlugin;
