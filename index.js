import express from 'express';
import ssr from './views/ssr';

const app = express();

// 3000番ポートで鯖を立てる
app.listen(3000);

app.use(express.static('assets'));

app.get('/', (_, res) => {
  const response = ssr();
  res.send(response);
});
