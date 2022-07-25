import prismaClient from "../../prisma"

interface UserRequest {
    name: string,
    email: string,
    password: string
}

class CreateUserService {
    async execute({ name, email, password }: UserRequest) {

        if (!email)
            throw new Error("Email is required");

        const emailInUse = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (emailInUse)
            throw new Error("Email already in use");

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: password
            }
        })

        return {
            content: user,
            message: "User created."
        }
    };
}

export { CreateUserService }
