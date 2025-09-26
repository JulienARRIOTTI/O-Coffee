import express from 'express';

import infoControllers from '../controllers/info.controllers.js';

const router = express.Router ();

router.get ('/info', infoControllers.index);

export default router;