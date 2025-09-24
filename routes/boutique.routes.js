import express from 'express';

import boutiqueControllers from '../controllers/boutique.controllers.js';

const router = express.Router ();

router.get ('/boutique', boutiqueControllers.index);

export default router;