import prismaClient from "../../prisma"

interface OrderItemRequest {
    amount: number;
    productId: string;
    orderId: string;
}

class CreateOrderItemService {
    async execute({ amount, productId, orderId }: OrderItemRequest) {

        const orderItem = await prismaClient.orderItem.create({
            data: {
                amount,
                productId: productId,
                orderId: orderId
            }
        })

        return orderItem;
    }
}

export { CreateOrderItemService }
