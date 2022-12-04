import prismaClient from "../../prisma"

class ListAllProductsService {
    async execute() {
        const products = await prismaClient.product.findMany();

        return products;
    }
}

export { ListAllProductsService }
