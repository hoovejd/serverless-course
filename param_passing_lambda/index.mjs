import moment from "moment";

const greeting = {
  en: "Hello",
  fr: "Bonjour",
  hi: "Namaste",
  es: "Hola",
  pt: "Olá",
  ur: "Assalamo aleikum",
  it: "Ciao",
  de: "Hallo",
};

// Look at the API Gateway AWS Proxy Test Template within lambda to see all fields available in the event object

export const handler = async (event, context) => {
  let version = context.functionVersion;
  let name = event.pathParameters.name;

  // Use destructuring to assign values
  // map event.queryStringParameters.lang to lang
  // map any other fields to info
  // if null queryStringParameters, then use an empty object
  let { lang, ...info } = event.queryStringParameters || {};

  let message = `${greeting[lang] ? greeting[lang] : greeting["en"]} ${name}`;

  let response = {
    message: message,
    info: info,
    timestamp: moment().unix(),
    version: version,
    name: name,
    lang: lang,
  };

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // This makes our API endpoint accessible from all domains (prevents CORS exception)
    },
    body: JSON.stringify(response),
  };
};
