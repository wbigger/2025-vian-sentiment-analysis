// Code.gs

// ID del tuo modulo Google (da sostituire)
const FORM_IDS = ['forms-id-1', 'forms-id-2'];

// Array di URL dei sondaggi veloci
const STUDENTS_QUICK_SURVEYS = [
    'URL_SONDAGGIO_1',
    'URL_SONDAGGIO_2',
    'URL_SONDAGGIO_3'
  ];

  function getRandomStudentQuickSurvey() {
    const randomIndex = Math.floor(Math.random() * QUICK_SURVEYS.length);
    return QUICK_SURVEYS[randomIndex];
  }

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