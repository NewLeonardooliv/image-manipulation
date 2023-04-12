import { ImageProcessor } from "@modules/ImageProcessor/Process/ImageProcessor/ImageProcessorUseCase";
import { ColorCorrectionFilterRepositoryPipe } from "@modules/ImageProcessor/Repositories/Pipes/ColorCorrectionFilterRepositoryPipe";
import { ColorizeFilterRepositoryPipe } from "@modules/ImageProcessor/Repositories/Pipes/ColorizeFilterRepositoryPipe";
import { ResizeFilterRepositoryPipe } from "@modules/ImageProcessor/Repositories/Pipes/ResizeFilterRepositoryPipe";
import { SmoothingFilterRepositoryPipe } from "@modules/ImageProcessor/Repositories/Pipes/SmoothingFilterRepositoryPipe";

const imageProcessor = new ImageProcessor();

imageProcessor.addFilter(new ResizeFilterRepositoryPipe());
imageProcessor.addFilter(new ColorCorrectionFilterRepositoryPipe());
imageProcessor.addFilter(new SmoothingFilterRepositoryPipe());
imageProcessor.addFilter(new ColorizeFilterRepositoryPipe());

imageProcessor.processImage('./images/imagem.png');
