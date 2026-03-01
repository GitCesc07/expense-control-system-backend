import { z } from "zod";
import { categoryType } from "../../../utils"

// * interface accounts
export const categorySchema = z.object({
    category_id: z.string().optional().nullable(),
    user_id: z.string()
        .nonempty("El id del usuario no puede estar vacio"),
    name: z.string()
        .max(60, "El nombre de la categoría no puede superar los 60 caracteres")
        .min(5, "El nombre de la categoría no puede ser menor a 5 caracteres")
        .nonempty("El nombre de la categoría no puede estar vacio"),
    description: z.string()
        .optional()
        .nullable(),
    type: categoryType,
    icon: z.string()
        .optional()
        .nullable()
});


const category_id = {
    type: "string",
    description: "Auto-generated category ID"
};
const user_id = {
    type: "string",
    description: "Owner user ID"
};
const name = {
    type: "string",
    description: "Account name"
};
const description = {
    type: "string",
    description: "Account description"
};
const type = {
    type: "string",
    enum: ["Income", "Exit"],
    description: "Category type"
};
const icon = {
    type: "string",
    description: "Icon of category"
};

export const CategoriesInterface = {
    type: "object",
    required: [
        "user_id",
        "name",
        "description",
        "type",
        "icon"
    ],
    properties: {
        user_id: user_id,
        name: name,
        description: description,
        type: type,
        icon: icon
    }
}