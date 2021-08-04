import { Router } from "express";

// import routes
import testRouter from './test.router';

export interface IRoutes<T> {
    testRouter: T;
}

export type IRoutesKey = keyof IRoutes<string>

const routes: IRoutes<Router> = {
    testRouter: testRouter
}

export default routes;
