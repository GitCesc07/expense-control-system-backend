import { pool } from "../../../database/db";
import { usersSchema } from "../index"

export class UsersRepository {
    async getAllUsers() {
        const query = "SELECT user_id, clerk_id, creation_date FROM users;";
        const data = await pool.query(query);
        return data.rows;
    }

    async getUserById({ clerkId }: { clerkId: string }) {
        const query = "SELECT clerk_id, creation_date FROM users WHERE clerk_id = $1;";
        const data = await pool.query(query, [clerkId]);
        return data.rows;
    }

    async createUser(clerkId: string) {

        const query = "INSERT INTO users(clerk_id, creation_date) VALUES($1, now())"
        await pool.query(
            query,
            [
                clerkId
            ]
        );

        return {
            message: "Usuario registrado exitosamente"
        }
    }

    async updateUser({ user_id, userData }: { user_id: string, userData: typeof usersSchema }) {

        const {
            clerk_id
        } = usersSchema.parse(userData);

        const query = "UPDATE users SET clerk_id = $1, modification_date = now() WHERE user_id = $2";
        await pool.query(query,
            [
                clerk_id,
                user_id
            ]
        );

        return {
            message: "Usuario actualizado exitosamente"
        }
    }
}