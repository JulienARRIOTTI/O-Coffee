import express from 'express';

import catalogControllers from '../controllers/catalog.controllers.js';

const router = express.Router ();

router.get ('/catalog', catalogControllers.index);

export default router;