import prismaClient from "../../prisma"

interface GetOrderDetailsRequest {
    orderId: string
}

class GetOrderDetailsService {
    async execute({ orderId }: GetOrderDetailsRequest) {
        const orderItems = await prismaClient.orderItem.findMany({
            where: {
                orderId: orderId
            },
            include: {
                product: {
                    select: {
                        name: true,
                        price: true,
                        description: true,
                    }
                },
                order: {
                    select: {
                        table: true,
                        status: true,
                        name: true
                    }
                }
            },
        });

        return orderItems;
    }
}

export { GetOrderDetailsService }

