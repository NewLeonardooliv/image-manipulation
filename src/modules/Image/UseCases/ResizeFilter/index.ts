import { SharpCorrectorRepository } from "@modules/Image/Implementations/SharpCorrectorRepository";
import { ResizeFilterUseCase } from "./ResizeFilterUseCase";

const resizeFilterUseCase = new ResizeFilterUseCase(new SharpCorrectorRepository);

export { resizeFilterUseCase }