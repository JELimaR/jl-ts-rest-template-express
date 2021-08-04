import { Request, Response } from 'express';

export const getTest = async( req: Request , res: Response ) => {
    let response = {
        ok: true,
        msg: 'test'
    }
    res.json({ response });
}
