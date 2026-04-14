import { z } from "zod";

// * interface accounts
export const categorySchema = z.object({
    type: z.string(),
    data: z.object({
        id: z.string(),
        email_addresses: z.string()
    })
});


const type = {
    type: "string",
    description: "Type of event in clerk"
};
const data = {
    type: "object",
    description: "Data of user in clerk"
};

export const CategoriesInterface = {
    type: "object",
    required: [
        "type",
        "data"
    ],
    properties: {
        type: type,
        data: data
    }
}