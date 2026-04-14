import { z } from "zod";
import { typeOfInputAndOutput } from "../../../utils";

// * interface accounts
export const motionSchema = z.object({
    motion_id: z.string()
        .nonempty("El id del movimiento no puede estar vacio"),
    user_id: z.string()
        .nonempty("El id del usuario no puede estar vacio"),
    account_id: z.string().optional().nullable(),
    creditCard_id: z.string().optional().nullable(),
    category_id: z.string()
        .nonempty("El id de la categoría no puede estar vacio"),
    type: typeOfInputAndOutput,
    amount: z.number()
        .min(0, "El monto no puede ser 0")
        .nonnegative("El monto no puede ser negativo"),
    description: z.string().optional().nullable(),
    movement_date: z.string()
        .nonempty("La fecha de movimiento no puede estar vacia")
});


const motion_id = {
    type: "string",
    description: "Auto-generated motion ID"
};

const user_id = {
    type: "string",
    description: "Owner user ID"
};

const creditCard_id = {
    type: "string",
    description: "Credit card ID"
};

const account_id = {
    type: "string",
    description: "Account ID"
};

const category_id = {
    type: "string",
    description: "Category ID"
};

const type = {
    type: "string",
    enum: ["Input", "Output"],
    description: "Type of motion (input or output)"
};

const amount = {
    type: "number",
    description: "Amount of motion"
};

const description = {
    type: "string",
    description: "Description of motion"
};

const movement_date = {
    type: "string",
    format: "date",
    description: "Date of motion"
};


export const MotionInterface = {
    type: "object",
    required: [
        "user_id",
        "account_id",
        "creditCard_id",
        "category_id",
        "type",
        "ammount",
        "description",
        "movement_date"
    ],
    properties: {
        user_id: user_id,
        account_id: account_id,
        creditCard_id: creditCard_id,
        category_id: category_id,
        type: type,
        ammount: amount,
        description: description,
        movement_date: movement_date
    }
}