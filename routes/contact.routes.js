import express from 'express';

import contactControllers from '../controllers/contact.controllers.js';

const router = express.Router ();

router.get ('/contact', contactControllers.index);
router.post ('/contact', contactControllers.submit);

export default router;