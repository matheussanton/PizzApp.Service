import { Request, Response } from 'express'
import { CreateOrderItemService } from '../../services/orderItem/CreateOrderItemService'

class CreateOrderItemController {
    async handle(req: Request, res: Response) {

        const { amount, productId, orderId } = req.body;

        const createOrderItemService = new CreateOrderItemService();

        const orderItem = await createOrderItemService.execute({
            amount,
            productId,
            orderId
        });

        return res.json(orderItem);
    }

}

export { CreateOrderItemController }
