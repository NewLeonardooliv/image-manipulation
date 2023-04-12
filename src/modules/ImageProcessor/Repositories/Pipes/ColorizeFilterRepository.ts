import sharp from 'sharp';
import { IFilter } from "../IFilter";

export class ResizeFilterRepository implements IFilter {
    async process(imagemPath: string): Promise<void> {
        const imagem = await sharp(imagemPath);
        const blueColor = '#0000FF';

        await imagem.tint(blueColor).toFile('./images/imagem_colorida.jpg');
    }
}