// Code.gs

// ID del tuo modulo Google (da sostituire)
const FORM_IDS = ['forms-id-1', 'forms-id-2'];

// Array di URL dei sondaggi veloci
const STUDENTS_QUICK_SURVEYS = [
  'https://www.google.com',
  'https://proxy.marconicloud.it',
  'https://www.marconicivitavecchia.it'
];
const STUDENTS_FULL_SURVEYS = [
  'https://www.google.com',
  'https://proxy.marconicloud.it',
  'https://www.marconicivitavecchia.it'
];
const OTHER_QUICK_SURVEYS = [
  'https://www.google.com',
  'https://proxy.marconicloud.it',
  'https://www.marconicivitavecchia.it'
];
const OTHER_FULL_SURVEYS = [
  'https://www.google.com',
  'https://proxy.marconicloud.it',
  'https://www.marconicivitavecchia.it'
];
function getRandomStudentQuickSurvey() {
  const randomIndex = Math.floor(Math.random() * STUDENTS_QUICK_SURVEYS.length);
  return STUDENTS_QUICK_SURVEYS[randomIndex];
}
function getRandomStudentFullSurvey() {
  const randomIndex = Math.floor(Math.random() * STUDENTS_FULL_SURVEYS.length);
  return STUDENTS_FULL_SURVEYS[randomIndex];
}
function getRandomOtherQuickSurvey() {
  const randomIndex = Math.floor(Math.random() * OTHER_QUICK_SURVEYS.length);
  return OTHER_QUICK_SURVEYS[randomIndex];
}
function getRandomOtherFullSurvey() {
  const randomIndex = Math.floor(Math.random() * OTHER_FULL_SURVEYS.length);
  return OTHER_FULL_SURVEYS[randomIndex];
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