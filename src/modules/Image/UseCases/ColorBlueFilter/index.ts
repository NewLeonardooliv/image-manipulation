import { SharpCorrectorRepository } from "@modules/Image/Implementations/SharpCorrectorRepository";
import { ColorBlueFilterUseCase } from "./ColorBlueFilterUseCase";

const colorBlueFilterUseCase = new ColorBlueFilterUseCase(new SharpCorrectorRepository);

export { colorBlueFilterUseCase }