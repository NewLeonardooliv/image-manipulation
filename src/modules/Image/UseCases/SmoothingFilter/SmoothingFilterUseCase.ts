import { IImageManipulation } from "@modules/Image/Repositories/IImageManipulation";

export class SmoothingFilterUseCase {
    constructor(private imageManipulation: IImageManipulation) { }

    async execute(path: string) {
        this.imageManipulation.SmoothingFilter(path);
    }
}