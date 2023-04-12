import { IImageManipulation } from "@modules/Image/Repositories/IImageManipulation";

export class ResizeFilterUseCase {
    constructor(private imageManipulation: IImageManipulation) { }

    async execute(path: string) {
        this.imageManipulation.ResizeFilter(path);
    }
}