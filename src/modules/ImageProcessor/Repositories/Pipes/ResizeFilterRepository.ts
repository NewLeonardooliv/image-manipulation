import sharp from 'sharp';
import { IFilter } from "../IFilter";

export class ResizeFilterRepository implements IFilter {
    async process(imagemPath: string): Promise<void> {
        const imagem = await sharp(imagemPath);
        const width = 820;
        const height = 465;

        await imagem.resize(width, height).toFile('./images/imagem_redimencionada.jpg');
    }
}