import jsonParser from "./jsonParser";

const jParser: jsonParser = new jsonParser({hello: 'hola'});

console.log(jParser.jsonToParser);
