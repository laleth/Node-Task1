const fs = require('fs');

const now = new Date();
const formattedDateTime = now.toISOString().replace(/[:T\-]/g, '_').split('.')[0];


const fileContent = now.toString();


fs.writeFile(`./data/${formattedDateTime}.txt`, fileContent, (err) => {
  if (err) {
    console.error('Error creating the file:', err);
  } else {
    console.log("File created Successfully");
  }
});


