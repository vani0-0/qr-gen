import axios from "axios";

export const GENERATE_QR = "/generate";

export function generateQR(data: string) {
    return axios.post(GENERATE_QR, { text: data });
}
