import { git } from './git';
const fetch = require('node-fetch-with-proxy');

async function run() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);
  }
  catch (err: any) {
    console.log(err);
  }
}

run();