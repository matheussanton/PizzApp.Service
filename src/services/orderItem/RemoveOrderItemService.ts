import prismaClient from "../../prisma"

interface RemoveOrderItemRequest {
    orderItemId: string;
}

class RemoveOrderItemService {
    async execute({ orderItemId }: RemoveOrderItemRequest) {

        const orderItem = await prismaClient.orderItem.delete({
            where: {
                id: orderItemId
            }
        });

        return orderItem;

    }
}

export { RemoveOrderItemService }
