import { z } from "zod";

// * interface users
export const usersSchema = z.object({
    user_id: z.string(),
    clerk_id: z.string()
        .nonempty("El id del auth no puede estar vacio")
});


const user_id = {
    type: "string",
    description: "Auto-generated account ID"
};

const clerk_id = {
    type: "string",
    description: "Clerk user ID"
};

export const UsersInterface = {
    type: "object",
    required: [
        "clerk_id"
    ],
    properties: {
        clerk_id: clerk_id,        
    }
}