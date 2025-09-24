import express from 'express';

import descriptionControllers from '../controllers/description.controllers.js';

const router = express.Router ();

router.get ('/description', descriptionControllers.index);

export default router;