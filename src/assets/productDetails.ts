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

const CONFORTO = `${SECTION_PREFIX}conforto/`;
export const conforto = [
  includeResponsive(`${CONFORTO}ar-condicionado-digital-dual-zone@3x`, "webp", {
    prefix: PREFIX,
  }),
  includeResponsive(`${CONFORTO}saida-ar-traseira-entrada-usb@3x`, "webp", {
    prefix: PREFIX,
  }),
  includeResponsive(`${CONFORTO}bancos-couro-ajuste-eletrico@3x`, "webp", {
    prefix: PREFIX,
  }),
  includeResponsive(`${CONFORTO}interior-funcional@3x`, "webp", {
    prefix: PREFIX,
  }),
  includeResponsive(`${CONFORTO}bancos-rebatidos@3x`, "webp", {
    prefix: PREFIX,
  }),
  includeResponsive(`${CONFORTO}porta-objetos@3x`, "webp", {
    prefix: PREFIX,
  }),
];

const TECNOLOGIA_PREFIX = `${SECTION_PREFIX}tecnologia/`;
export const tecnologia = [
  includeResponsive(`${TECNOLOGIA_PREFIX}keyless-entry-n-go@3x`, "webp", {
    prefix: PREFIX,
  }),
  includeResponsive(
    `${TECNOLOGIA_PREFIX}tecnlogia-que-salta-aos-olhos@3x`,
    "webp",
    {
      prefix: PREFIX,
    }
  ),
  includeResponsive(`${TECNOLOGIA_PREFIX}camera-360-off-road@3x`, "webp", {
    prefix: PREFIX,
  }),
];

const DESIGN = `${SECTION_PREFIX}design/`;
export const design = [
  includeResponsive(`${DESIGN}detalhes-cromados@3x`, "webp", {
    prefix: PREFIX,
  }),
  includeResponsive(`${DESIGN}dummy-productDetails`, "webp", {
    prefix: PREFIX,
  }),
  includeResponsive(`${DESIGN}rodas-liga-leve-farol-full-led@3x`, "webp", {
    prefix: PREFIX,
  }),
  includeResponsive(`${DESIGN}painel-moderno@3x`, "webp", {
    prefix: PREFIX,
  }),
];



const SEGURANCA = `${SECTION_PREFIX}seguranca/`;
export const seguranca = [
  includeResponsive(`${SEGURANCA}alerta-saida-faixa@3x`, "webp", {
    prefix: PREFIX,
  }),
  includeResponsive(`${SEGURANCA}assistente-descida-subida@3x`, "webp", {
    prefix: PREFIX,
  }),
  includeResponsive(`${SEGURANCA}dummy-productDetails`, "webp", {
    prefix: PREFIX,
  }),
  includeResponsive(`${SEGURANCA}controle-estabilidade@3x`, "webp", {
    prefix: PREFIX,
  }),
  includeResponsive(`${SEGURANCA}controle-eletrico-descida@3x`, "webp", {
    prefix: PREFIX,
  }),
  includeResponsive(`${SEGURANCA}6-airbags-serie@3x`, "webp", {
    prefix: PREFIX,
  }),
  includeResponsive(`${SEGURANCA}assistente-partida-rampa@3x`, "webp", {
    prefix: PREFIX,
  }),
  includeResponsive(`${SEGURANCA}sensor-pressao@3x`, "webp", {
    prefix: PREFIX,
  }),
];

// const CONNECT_ME = `${SECTION_PREFIX}connect-me/`;
// export const connect_me = [
//   includeResponsive(`${CONNECT_ME}dummy-productDetails`, "webp", {
//     prefix: PREFIX,
//   }),
//   includeResponsive(`${CONNECT_ME}dummy-productDetails`, "webp", {
//     prefix: PREFIX,
//   }),
//   includeResponsive(`${CONNECT_ME}dummy-productDetails`, "webp", {
//     prefix: PREFIX,
//   }),
//   includeResponsive(`${CONNECT_ME}dummy-productDetails`, "webp", {
//     prefix: PREFIX,
//   }),
//   includeResponsive(`${CONNECT_ME}dummy-productDetails`, "webp", {
//     prefix: PREFIX,
//   }),
// ];


