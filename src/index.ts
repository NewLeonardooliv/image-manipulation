import { ColorCorrectionFilterRepository } from "@modules/ImageProcessor/Repositories/Pipes/ColorCorrectionFilterRepository";
import { ResizeFilterRepository } from "@modules/ImageProcessor/Repositories/Pipes/ColorizeFilterRepository";
import { SmoothingFilterRepository } from "@modules/ImageProcessor/Repositories/Pipes/SmoothingFilterRepository";
import { ImageProcessor } from "@modules/ImageProcessor/UseCases/ImageProcessor/ImageProcessorUseCase";

const imageProcessor = new ImageProcessor();

imageProcessor.addFilter(new ResizeFilterRepository());
imageProcessor.addFilter(new ColorCorrectionFilterRepository());
imageProcessor.addFilter(new SmoothingFilterRepository());

imageProcessor.processImage('./images/imagem.png');
