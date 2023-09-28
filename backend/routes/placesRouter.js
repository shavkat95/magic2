import express from 'express';
import { getAllPlaces, getPlaceById } from '../controllers/placesController.js';


const placesRouter = express.Router();

placesRouter.route('/all').get(getAllPlaces);
placesRouter.route('/byID/:id').get(getPlaceById);
placesRouter.route('/search/:search').get(getPlaceById);

export default placesRouter;