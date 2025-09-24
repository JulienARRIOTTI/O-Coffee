import express from 'express';
import homeRouter from './routes/home.routes.js';
import descriptionRouter from './routes/description.routes.js';
import catalogRouter from './routes/catalog.routes.js';

import 'dotenv/config';



const app = express();
const port = process.env.PORT;



app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use(express.static('public'));



app.use(express.urlencoded({ extended: true }));
app.use('/', homeRouter);
app.use('/description', descriptionRouter);
app.use('/catalog', catalogRouter);

app.listen(port, () => {
    console.log(`Le serveur tourne sur http://localhost:${port}`);
});