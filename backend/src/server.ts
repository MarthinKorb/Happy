import express from 'express';

import './database/connection';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

console.log('Server running on port 3333');
app.listen(3333);