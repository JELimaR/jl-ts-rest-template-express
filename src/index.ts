import Server from "./Server";
import dotenv from 'dotenv';

dotenv.config();

const server = Server.instance;

server.init();


