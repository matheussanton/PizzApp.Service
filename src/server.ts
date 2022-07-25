import express, { Request, Response, NextFunction } from 'express';
import "express-async-errors"
import cors from "cors";
import { router } from "./routes"

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof Error) {
        //If is type error Error
        return res.status(404).json({
            status: 'error',
            message: error.message,
        })
    }

    return res.status(500).json({
        status: 'error',
        message: "Internal Server Error",
    })
});

app.listen(3333, () => {
    console.log("PizzApp server is running!");
    console.log('(ctrl + click) > http://localhost:3333/');
});
