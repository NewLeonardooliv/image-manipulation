import sharp from 'sharp';
import { IFilter } from "../IFilter";

export class ColorCorrectionFilterRepositoryPipe implements IFilter {
    async process(imagemPath: string): Promise<void> {
        const imagem = await sharp(imagemPath);

        await imagem.modulate({ brightness: 1.2, saturation: 1.2 }).toFile('./images/imagem_corrigida.jpg');
    }
}