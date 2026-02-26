import { typeOfInputAndOutput } from "../../../utils";


// * interface motion
export interface MotionInterface {
    motion_id: string,
    user_id: string,
    account_id: string,
    creditCard_id: string,
    category_id: string,
    type: typeOfInputAndOutput,
    ammount: Float32Array,
    description: string,
    movement_date: string,
    creation_date: string,
    modification_date: string
}
