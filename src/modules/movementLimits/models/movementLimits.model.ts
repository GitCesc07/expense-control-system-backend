import { typeOfInputAndOutput } from "../../../utils";

export interface movementLimitsInterface {
    movementLimit_id: string,
    user_id: string,
    account_id: string,
    creditCard_id: string,
    category_id: string,
    type: typeOfInputAndOutput,
    limit_ammount: Float32Array,
    period: string,
    creation_date: string,
    modification_date: string
}