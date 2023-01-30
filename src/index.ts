import * as dotenv from 'dotenv';
import express from 'express';

import { helper } from './helpers/helper.js';
import serverConfig from './config/serverConfig.js';

dotenv.config();

const app = express();

// allow CORs from certain origins only in production
if (process.env.NODE_ENV === 'production') {
  serverConfig(app);
}

app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}!`);
});
