
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    { message:"Type in your URL?",//question in message
      name:"URL",},//answer stored in name
  ])
  .then((answers) => {
    const URL=answers.URL;
    var qr_svg = qr.image(URL);
    qr_svg.pipe(fs.createWriteStream('qr.img2.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

 