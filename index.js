import express from 'express';
import ssr from './src/ssr';

const app = express();

// 3000番ポートで鯖を立てる
app.listen(3000);

app.get('/', (_, res) => {
  res.send(ssr());
});
