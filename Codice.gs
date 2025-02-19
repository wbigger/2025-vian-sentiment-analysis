// Code.gs

// ID del tuo modulo Google (da sostituire)
const FORM_IDS = ['forms-id-1', 'forms-id-2'];

function doGet() {
    return HtmlService.createHtmlOutputFromFile('Index')
        .setTitle('Monitoraggio Sondaggio')
        .setFaviconUrl('https://www.google.com/forms/about/images/forms-icon.png');
}

function getFormResponses() {
    let responses = 0;
    FORM_IDS.forEach((F_ID) => {
        const form = FormApp.openById(F_ID);
        responses += form.getResponses().length;
        console.log(responses);
    });
    return responses;
}