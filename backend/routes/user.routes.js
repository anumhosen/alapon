import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getUsersForSidebar } from '../controllers/user.controllers.js';

const routes = express.Router();

routes.get("/", protectRoute, getUsersForSidebar);
export default routes;