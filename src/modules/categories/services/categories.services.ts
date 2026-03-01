import { categorySchema } from "../index";
import { CategoryRepository } from "../repository/categories.repository";

export class CategoryServices {
    private repository = new CategoryRepository();

    async getAllCategory() {
        return this.repository.getAllCategory();
    }

    async getCategoryById({ category_id }: { category_id: string }) {
        return this.repository.getCategoryById({ category_id });
    }

    async createCategory({ categoryData }: { categoryData: typeof categorySchema }) {
        return this.repository.createCategory(categoryData);
    }

    async updateCategory({ category_id, categoryData }: { category_id: string, categoryData: typeof categorySchema }) {
        return this.repository.updateCategory({ category_id, categoryData });
    }
}