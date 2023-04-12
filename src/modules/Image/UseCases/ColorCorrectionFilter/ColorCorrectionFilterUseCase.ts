import { IImageManipulation } from "@modules/Image/Repositories/IImageManipulation";

export class ColorCorrectionFilterUseCase {
    constructor(private imageManipulation: IImageManipulation) { }

    async execute(path: string) {
        this.imageManipulation.ColorCorrectionFilter(path);
    }
}