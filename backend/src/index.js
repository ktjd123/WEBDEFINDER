import express from 'express';
import bodyParser from 'body-parser';
import api from './routes';

const app = express();

let port = 8080;

app.use(bodyParser.json());

app.use('/api', api);
app.use('/', express.static(__dirname+'/../frontend'))

app.listen(port, () => {
    console.log('Express is running on port', port);
});