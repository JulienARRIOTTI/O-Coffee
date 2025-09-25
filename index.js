import 'dotenv/config';

import express from 'express';
import homeRouter from './routes/home.routes.js';
import catalogRouter from './routes/catalog.routes.js';
import boutiqueRouter from './routes/boutique.routes.js';

const app = express();
const port = process.env.PORT;



app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use(express.static('public'));



app.use(express.urlencoded({ extended: true }));
app.use('/', homeRouter);
app.use('/catalog', catalogRouter);
app.use('/boutique', boutiqueRouter);

app.listen(port, () => {
    console.log(`Le serveur tourne sur http://localhost:${port}`);
});