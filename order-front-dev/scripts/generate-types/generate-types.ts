// eslint-disable-next-line import/no-extraneous-dependencies,@typescript-eslint/no-var-requires
require('dotenv').config();
// eslint-disable-next-line import/no-extraneous-dependencies,@typescript-eslint/no-var-requires
const { generateApi } = require('swagger-typescript-api');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

// const swaggerUrl = 'http://localhost:8001/api-docs/';
// const swaggerUrl = process.env.SWAGGER_URL;
// const version = 'process.env.REACT_APP_API_VERSION';
// const version = process.env.REACT_APP_API_VERSION;
const swaggerUrlWithVersion = `http://localhost:8001/api-definition`;
// const swaggerUrlWithVersion = `${swaggerUrl}/${version}/swagger.json`;

// if (!swaggerUrl) {
//   throw Error('Swagger url is not defined');
// }

// if (!version) {
//   throw Error('Version is not defined');
// }

console.log(swaggerUrlWithVersion);

const currentDir = path.resolve(process.cwd(), 'scripts/generate-types');
const tempGeneratedDir = `${currentDir}/temp`;
const apiDir = path.resolve(process.cwd(), 'src/shared/services/api');
const typesDir = path.resolve(process.cwd(), 'src/shared/types');

generateApi({
  templates: `${currentDir}/templates`,
  // output: temp.GeneratedDir,
  input: `${currentDir}/api-definition.yaml`,
  // url: swaggerUrlWithVersion,
  httpClientType: 'fetch',
  defaultResponseAsSuccess: false,
  generateRouteTypes: false,
  generateResponses: true,
  toJS: false,
  extractRequestParams: true,
  prettier: {
    endOfLine: 'auto',
    singleQuote: true,
    printWidth: 100,
    tabWidth: 2,
    trailingComma: 'es5',
    parser: 'typescript',
  },
  defaultResponseType: 'void',
  singleHttpClient: false,
  modular: true,
  cleanOutput: true,
  enumNamesAsValues: true,
  moduleNameFirstTag: true,
  generateUnionEnums: false,
  extraTemplates: [],
})
  // @ts-ignore
  .then(({ files }) => {
    // @ts-ignore
    files.forEach(({ content, name }) => {
      let output = '';
      if (name === 'http-client.ts') {
        output = '';
      } else if (name === 'data-contracts.ts') {
        output = `${typesDir}/types.generated.ts`;
      } else {
        const [fileName] = name.split('.');
        output = `${apiDir}/api${fileName}.generated.ts`;
      }

      if (output !== '') {
        fs.writeFile(output, content, () => {
          console.log('write ', output);
        });
      }
      fs.unlink(`${tempGeneratedDir}/${name}`, () => {
        console.log('remove ', name);
      });
    });
  })
  // @ts-ignore
  .catch((e) => console.error(e));
