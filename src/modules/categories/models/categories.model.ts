import { typeOfInputAndOutput } from "../../../utils"

// * interface categories
export interface CategoriesInterface {
    category_id: string,
    user_id: string,
    name: string,
    description: string,
    type: typeOfInputAndOutput,
    initial_balance: Float32Array,
    current_balance: Float32Array,
    currency: Float32Array
    creation_date: string
}