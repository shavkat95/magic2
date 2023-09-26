import express from 'express';
import { getAllPlaces, getPlaceById } from '../controllers/placesController.js';


const placesRouter = express.Router();

placesRouter.route('/').get(getAllPlaces);
placesRouter.route('/:id').get(getPlaceById);

export default placesRouter;