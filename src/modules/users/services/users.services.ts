import { usersSchema } from "../index"
import { UsersRepository } from "../repository/users.repository"

export class UsersServices {
    private repository = new UsersRepository();

    async getAllUsers() {
        return this.repository.getAllUsers();
    }

    async getUserById({ clerkId }: { clerkId: string }) {
        return this.repository.getUserById({ clerkId });
    }

    async createUser({ clerkId }: { clerkId: string }) {
        return this.repository.createUser(clerkId);
    }

    async updateUser({ user_id, userData }: { user_id: string, userData: typeof usersSchema }) {
        return this.repository.updateUser({ user_id, userData });
    }
}