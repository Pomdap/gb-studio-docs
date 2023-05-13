const { exec } = require('child_process');
const path = require('path');
const config = require('../../docusaurus.config.js');

// Array of locales

const locales = config.i18n.locales.map(locale => locale === config.i18n.defaultLocale ? '' : locale);
const targetDomain = 'http://localhost:3000';

// Function to call the program with a specific locale
function callDocusaurusPDF(locale) {

    const outputFolderPath = './static/assets/pdf';
    const outputFilePath = path.join(outputFolderPath, `www.gbstudio.dev-${locale ? `${locale}-` : ''}docs.txt`);
    const outputPDFPath = path.join(outputFolderPath, `www.gbstudio.dev-${locale ? `${locale}-` : ''}docs.pdf`);

    const outputFileName = `www.gbstudio.dev-${locale ? `${locale}-` : ''}docs.txt`;
    const outputPDFName = `www.gbstudio.dev-${locale ? `${locale}-` : ''}docs.pdf`;
    const command = `npx docusaurus-prince-pdf -u ${targetDomain}/${locale ? `${locale}/` : ''}docs/ --file ${outputFilePath} --output ${outputPDFPath} --include-index true --list-only`;

    exec(command, (error, stdout, stderr) => {

        console.log(stdout);

        if (error) {
            console.error(`Error occurred for ${locale}: ${error.message}`);
            return;
        }
        // if (stderr) {
        //     console.error(`Command error for ${locale}: ${stderr}`);
        //     return;
        // }

        // Start another process with prince command
        const princeCommand = `prince --no-warn-css --style=./scripts/generate-pdf/style.css --input-list=${outputFilePath} -o ${outputPDFPath}`;
        exec(princeCommand, (princeError, princeStdout, princeStderr) => {
            if (princeError) {
                console.error(`Error occurred for prince command: ${princeError.message}`);
                return;
            }
            if (princeStderr) {
                console.error(`Command error for prince command: ${princeStderr}`);
                return;
            }

            console.log(`Prince PDF conversion completed for ${locale}`);
        });
    });
}

// Loop through the locales and call the program
for (const locale of locales) {
    callDocusaurusPDF(locale);
}