const fs = require('fs');
const dotenv = require('dotenv');

const envConfig = dotenv.config().parsed;

const targetDir = './src/environments';
const targetPath = './src/environments/environment.ts';

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

const envFileContent = `
  export const environment = {
    production: ${envConfig.NODE_ENV === 'production'},
    API_URL: '${envConfig.API_URL}',
    PORT: ${envConfig.PORT || 4200},
    BACKEND: '${envConfig.BACKEND || "http://127.0.0.1:8000"}'
  };
`;

fs.writeFileSync(targetPath, envFileContent);