import express from 'express';

import homeControllers from '../controllers/home.controllers.js';
import catalogController from '../controllers/catalog.controllers.js';

const router = express.Router ();

router.get ('/', homeControllers.index);
router.get ('/catalog', catalogController.index);

export default router;