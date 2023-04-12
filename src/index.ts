import { colorBlueFilterUseCase } from "@modules/Image/UseCases/ColorBlueFilter";
import { colorCorrectionFilterUseCase } from "@modules/Image/UseCases/ColorCorrectionFilter";
import { resizeFilterUseCase } from "@modules/Image/UseCases/ResizeFilter";
import { smoothingFilterUseCase } from "@modules/Image/UseCases/SmoothingFilter";

colorCorrectionFilterUseCase.execute('./images/imagem.png');
smoothingFilterUseCase.execute('./images/imagem.png');
resizeFilterUseCase.execute('./images/imagem.png');
colorBlueFilterUseCase.execute('./images/imagem.png');