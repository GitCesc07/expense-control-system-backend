import { z } from "zod";

// * types accounts
export const accountType = z.enum([
    "Efectivo",
    "Banco",
    "Billetera Digital"
]);

export const categoryType = z.enum([
    "Ingreso",
    "Egreso"
])
