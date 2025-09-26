import express from 'express';

import homeControllers from '../controllers/home.controllers.js';
import catalogController from '../controllers/catalog.controllers.js';
import boutiqueController from '../controllers/boutique.controllers.js';
import infoController from '../controllers/info.controllers.js';
import contactController from '../controllers/contact.controllers.js';

const router = express.Router ();

router.get ('/', homeControllers.index);
router.get ('/catalog', catalogController.index);
router.get ('/boutique', boutiqueController.index);
router.get ('/info', infoController.index);
router.get ('/contact', contactController.index);

export default router;