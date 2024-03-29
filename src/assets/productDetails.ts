import { includeResponsive } from "@/utils/imagePrefixes";

const PREFIX = `${process.env.BASE_PREFIX}images/`;
const SECTION_PREFIX = "ProductDetails/";

const PERFORMANCE_PREFIX = `${SECTION_PREFIX}performance/`;
export const performance = [
  includeResponsive(`${PERFORMANCE_PREFIX}motor-turbo-diesel@3x`, "webp", {
    prefix: PREFIX,
  }),
  includeResponsive(`${PERFORMANCE_PREFIX}tracao-4x4-seletor@3x`, "webp", {
    prefix: PREFIX,
  }),
  includeResponsive(`${PERFORMANCE_PREFIX}cacamba-gigante@3x`, "webp", {
    prefix: PREFIX,
  }),
  includeResponsive(`${PERFORMANCE_PREFIX}bloqueio-eletronico@3x`, "webp", {
    prefix: PREFIX,
  }),
  includeResponsive(`${PERFORMANCE_PREFIX}assistente-partida-rampa@3x`, "webp", {
    prefix: PREFIX,
  }),
  includeResponsive(`${PERFORMANCE_PREFIX}capacidade-reboque@3x`, "webp", {
    prefix: PREFIX,
  }),
];
