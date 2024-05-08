import axios from "axios";
import { QRParameters } from "./_models";

export const GENERATE_QR = "/api/qr/static";

export function generateQR(data: QRParameters) {
    return axios.post(GENERATE_QR, { data });
}
