import sharp from 'sharp';
import { IImageManipulation } from '../Repositories/IImageManipulation';

export class SharpCorrectorRepository implements IImageManipulation {
    async ColorCorrectionFilter(imagemPath: string): Promise<void> {
        const imagem = await sharp(imagemPath);
        await imagem.modulate({ brightness: 1.2, saturation: 1.2 }).toFile('./images/imagem_corrigida.jpg');
    }

    async SmoothingFilter(imagemPath: string): Promise<void> {
        const imagem = await sharp(imagemPath);
        await imagem.blur(10).toFile('./images/imagem_blur.jpg');

    }

    async ResizeFilter(imagemPath: string): Promise<void> {
        const imagem = await sharp(imagemPath);
        const width = 820;
        const height = 465;
        await imagem.resize(width, height).toFile('./images/imagem_redimencionada.jpg');
    }

}