import { Response, Request } from "express"
import { RemoveOrderItemService } from "../../services/orderItem/RemoveOrderItemService";

class RemoveOrderItemController {
    async handle(req: Request, res: Response) {

        const orderItemId = req.query.orderItemId as string;

        const removeOrderItemService = new RemoveOrderItemService();
        const orderItem = await removeOrderItemService.execute({ orderItemId });

        return res.json(orderItem);
    }
}

export { RemoveOrderItemController }
