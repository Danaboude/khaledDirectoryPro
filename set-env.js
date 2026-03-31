const fs = require('fs');
const path = require('path');

// To run this script, set the environment variables via Vercel or your local environment.
const firebaseApiKey = process.env.FIREBASE_API_KEY;

if (!firebaseApiKey) {
  console.warn('⚠️ WARNING: FIREBASE_API_KEY not found in environment variables!');
  console.warn('The build will proceed with placeholder values. Make sure to set environment variables in Vercel.');
} else {
  console.log('✅ FIREBASE_API_KEY found. Generating environment files...');
}

const firebaseAuthDomain = process.env.FIREBASE_AUTH_DOMAIN || '';
const firebaseProjectId = process.env.FIREBASE_PROJECT_ID || '';
const firebaseStorageBucket = process.env.FIREBASE_STORAGE_BUCKET || '';
const firebaseMessagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID || '';
const firebaseAppId = process.env.FIREBASE_APP_ID || '';
const password = process.env.password || '';


const envConfigFile = `export const environment = {
  production: true,
  firebase: {
    apiKey: '${firebaseApiKey}',
    authDomain: '${firebaseAuthDomain}',
    projectId: '${firebaseProjectId}',
    storageBucket: '${firebaseStorageBucket}',
    messagingSenderId: '${firebaseMessagingSenderId}',
    appId: '${firebaseAppId}',
    password: '${password}',
  }
};
`;

const envDir = path.join(__dirname, 'src', 'environments');
if (!fs.existsSync(envDir)) {
  fs.mkdirSync(envDir, { recursive: true });
}

const targetPath = path.join(envDir, 'environment.prod.ts');
const targetPathDev = path.join(envDir, 'environment.ts');

console.log('Generating environment files...');

fs.writeFileSync(targetPath, envConfigFile);
fs.writeFileSync(targetPathDev, envConfigFile.replace('production: true', 'production: false'));

console.log(`Environment file generated at ${targetPath}`);
