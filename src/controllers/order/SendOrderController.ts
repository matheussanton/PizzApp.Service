import { Response, Request } from "express"
import { SendOrderService } from "../../services/order/SendOrderService";

class SendOrderController {
    async handle(req: Request, res: Response) {

        const orderId = req.body.orderId as string;

        const sendOrderService = new SendOrderService();
        const order = await sendOrderService.execute({ orderId });

        return res.json(order);
    }
}

export { SendOrderController }
