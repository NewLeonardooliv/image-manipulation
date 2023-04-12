import sharp from 'sharp';
import { IFilter } from "../IFilter";

export class SmoothingFilterRepository implements IFilter {
    async process(imagemPath: string): Promise<void> {
        const imagem = await sharp(imagemPath);

        await imagem.blur(10).toFile('./images/imagem_blur.jpg');
    }
}