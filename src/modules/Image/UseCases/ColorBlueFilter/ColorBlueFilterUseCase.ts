import { IImageManipulation } from "@modules/Image/Repositories/IImageManipulation";

export class ColorBlueFilterUseCase {
    constructor(private imageManipulation: IImageManipulation) { }

    async execute(path: string) {
        this.imageManipulation.ColorBlueFilter(path);
    }
}