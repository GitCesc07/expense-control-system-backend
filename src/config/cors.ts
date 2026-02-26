import { CorsOptions } from "cors";


export const corsConfig: CorsOptions = {
    origin: function (origin, callback) {
        const whiteList = [process.env.FRONTEND_URL, process.env.FRONTEND_URL_PRODUCCTION];

        if (!origin) {
            return callback(null, true);
        }

        if(whiteList.includes(origin)) {
            return callback(null, true);
        }

        console.log("CORS bloqueado: ", origin);
        return callback(new Error("Error de CORS"));
    },
    credentials: true
}