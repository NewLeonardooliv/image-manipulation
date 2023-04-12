export interface IImageManipulation {
    ColorCorrectionFilter(imagemPath: string): Promise<void>;
    SmoothingFilter(imagemPath: string): Promise<void>;
    ResizeFilter(imagemPath: string): Promise<void>;
}