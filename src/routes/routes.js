import express from 'express';

const router = express.Router();

router
  .get('/users', (req, res) => {
    res.status(200).send('batata');
  });

export default router;
