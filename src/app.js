import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/routes.js';

db.on('error', console.log.bind(console, 'Connection Error'));

db.once('open', () => {
  console.log('DEU TUDO CERTO');
});

const app = express();
app.use(express.json());
app.use(routes);

export default app;
