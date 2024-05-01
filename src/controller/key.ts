import { Request, Response } from 'express'
import Key from "../models/key";

const createKey = async (req: Request, res: Response): Promise<Response> => {
    const { key } = req.body as { key?: string };
    if (!key) return res.status(400).send({ error: 'Key query parameter is required' });

    try {
        await Key.create({ key });
        return res.sendStatus(201);
    } catch (error: any) {
        return res.status(400).send({ errors: error?.message || error });
    }
};


const getByKey = async (req: Request, res: Response): Promise<Response> => {
    const { key } = req.query as { key?: string };
    if (!key) return res.status(400).send({ error: 'Key query parameter is required' });

    try {
        const keyCount = await Key.countDocuments({ key });
        return res.send(keyCount.toString())
    } catch (error: any) {
        return res.status(400).send({ errors: error?.message || error });
    }
};

export { createKey, getByKey };
