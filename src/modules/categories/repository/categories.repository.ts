import { pool } from "../../../database/db";
import { categorySchema } from "../index";

export class CategoryRepository {
    async getAllCategory() {
        const query = "SELECT category_id, user_id, name, description, type, icon, creation_date FROM categories;";
        const data = await pool.query(query);
        return data.rows;
    }
    async getCategoryById({ category_id }: { category_id: string }) {
        const query = "SELECT name, description, type, icon, creation_date FROM categories WHERE category_id = $1;";
        const data = await pool.query(query, [category_id]);
        return data.rows;
    }

    async createCategory(categoryData: typeof categorySchema) {
        const {
            user_id,
            name,
            description,
            type,
            icon
        } = categorySchema.parse(categoryData);

        const query = "INSERT INTO categories(user_id, name, description, type, icon, creation_date) VALUES($1, $2, $3, $4, $5, now())"
        await pool.query(
            query,
            [
                user_id,
                name,
                description,
                type,
                icon
            ]
        );

        return {
            message: "Categoría creada exitosamente"
        }
    }

    async updateCategory({ category_id, categoryData }: { category_id: string, categoryData: typeof categorySchema }) {

        const {
            name,
            description,
            type,
            icon
        } = categorySchema.parse(categoryData);

        const query = "UPDATE categories SET name = $1, description = $2, type = $3, icon = $4, modification_date = now() WHERE category_id = $5";
        await pool.query(query,
            [
                name,
                description,
                type,
                icon,
                category_id
            ]
        );

        return {
            message: "Categoría actualizada exitosamente"
        }
    }
}