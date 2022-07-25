import prismaClient from "../../prisma"
import { hash } from 'bcryptjs';

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

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            },
            select: {
                id: true,
                email: true,
                name: true,
            }
        })

        return {
            content: user,
            message: "User created."
        }
    };
}

export { CreateUserService }
