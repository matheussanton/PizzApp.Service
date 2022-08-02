import prismaClient from "../../prisma";

interface SendOrderRequest {
    orderId: string;
}

class SendOrderService {
    async execute({ orderId }: SendOrderRequest) {

        const order = await prismaClient.order.update({
            where: {
                id: orderId
            },
            data: {
                draft: false
            }
        });

        return order;
    }
}

export { SendOrderService }
