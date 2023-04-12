import { SharpCorrectorRepository } from "@modules/Image/Implementations/SharpCorrectorRepository";
import { SmoothingFilterUseCase } from "./SmoothingFilterUseCase";

const smoothingFilterUseCase = new SmoothingFilterUseCase(new SharpCorrectorRepository);

export { smoothingFilterUseCase }