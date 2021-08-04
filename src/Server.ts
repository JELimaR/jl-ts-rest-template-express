import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import Routes, { IRoutes, IRoutesKey } from './Routes';
import config from './config/config';


export default class Server {
    private static _instance: Server | undefined;

    private _app: Application;
    private _port: string = config.port;

    private _apiPaths: IRoutes<string> = {
        'testRouter': '/api/test',
    }

    private constructor() {
        this._app = express();

        // Métodos iniciales
        this.dbConnections();
        this.middlewares();
        this.routes();
    }

    static get instance(): Server {
        if (Server._instance === undefined) {
            Server._instance = new Server();
        }
        return Server._instance;
    }

    private async dbConnections() {
        try {
            console.info( 'DB connected...' )
        } catch (e) {
            console.error( e.message )
        }
    }

    private middlewares() {

        // CORS
        this._app.use( cors() );
        // Morgan
        this._app.use( morgan('dev') )

        // body read
        this._app.use( express.json() );

        // Public folder
        this._app.use( express.static('public') );
    }

    private routes() {
        for (let r in this._apiPaths) {
            this._app.use(
                this._apiPaths[ r as IRoutesKey ],
                Routes[ r as IRoutesKey ]
            )
        }
    }

    init(): void {
        this._app.listen( this._port, () => {
            console.log(`Server in port: ${this._port}`)
        } )
    }
}