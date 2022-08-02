import { Request, Response } from 'express'
import { GetOrderDetailsService } from '../../services/order/GetOrderDetailsService'


class GetOrderDetailsController {
    async handle(req: Request, res: Response) {
        const orderId = req.query.orderId as string;

        const getOrderDetailsService = new GetOrderDetailsService();

        const orderItems = await getOrderDetailsService.execute({ orderId });

        return res.json(orderItems);
    }
}

export { GetOrderDetailsController }

