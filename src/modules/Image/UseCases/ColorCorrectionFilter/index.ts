import { SharpCorrectorRepository } from "@modules/Image/Implementations/SharpCorrectorRepository";
import { ColorCorrectionFilterUseCase } from "./ColorCorrectionFilterUseCase";

const colorCorrectionFilterUseCase = new ColorCorrectionFilterUseCase(new SharpCorrectorRepository);

export { colorCorrectionFilterUseCase }