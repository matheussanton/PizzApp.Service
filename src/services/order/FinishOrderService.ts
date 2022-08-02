import prismaClient from "../../prisma";

interface SendOrderRequest {
    orderId: string;
}

class FinishOrderService {
    async execute({ orderId }: SendOrderRequest) {

        const order = await prismaClient.order.update({
            where: {
                id: orderId
            },
            data: {
                status: true
            }
        });

        return order;
    }
}

export { FinishOrderService }
