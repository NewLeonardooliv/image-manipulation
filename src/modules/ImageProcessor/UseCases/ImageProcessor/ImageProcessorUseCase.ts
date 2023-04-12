import { IFilter } from "@modules/ImageProcessor/Repositories/IFilter";

export class ImageProcessor {
    private filters: IFilter[] = [];

    addFilter(filter: IFilter): void {
        this.filters.push(filter);
    }

    async processImage(imagePath: string): Promise<void> {
        for (const filter of this.filters) {
            filter.process(imagePath);
        }
    }
}