import { Request, Response, Router } from 'express';

const router = Router();

import { createKey, getByKey } from "../controller/key";

router.post("/input", createKey);

router.get("/query", getByKey);

router.get("/", (req: Request, res: Response) => {
    res.send("It is alive!");
});

export default router;