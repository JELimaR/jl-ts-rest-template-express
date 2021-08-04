import { Router } from "express";
import { getTest } from '../controllers/test.controller';

const testRouter: Router = Router();

// routes
testRouter.get('/', getTest)

//
export default testRouter;