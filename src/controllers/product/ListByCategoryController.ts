import { Request, Response } from "express"
import { ListByCategoryService } from "../../services/product/ListByCategoryService"

class ListByCategoryController {

    async handle(req: Request, res: Response) {

        const categoryId = req.query.categoryId as string;

        const listByCategoryService = new ListByCategoryService();

        const procucts = await listByCategoryService.execute({ categoryId });

        return res.json(procucts);
    }

}

export { ListByCategoryController }
