export interface QRParameters {
    size: number;
    qrCategory: string;
    text: string;
    logo?: string;
    eye_outer?: string;
    qrData?: string;
    colorDark?: string;
    gradient?: boolean;
    grdType?: string;
    color01?: string;
    color02?: string;
    eye_color?: boolean;
    eye_color01?: string;
    eye_color02?: string;
    backgroundColor?: string;
    transparentBkg?: boolean;
    frame?: number;
    frameText?: string;
    frameColorType?: string;
    frameColor?: string;
    frameGradientStartColor?: string;
    frameGradientEndColor?: string;
}
