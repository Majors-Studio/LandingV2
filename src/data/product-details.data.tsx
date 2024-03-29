import {
  conforto,
  performance,
  seguranca,
  tecnologia,
  design,
} from "@/assets/productDetails";
import { PRODUCT_DETAILS_REF } from "@/data/menu.data";
import { MenuLabels } from "@/models";
import formatString from "@/utils/formatString";

export interface ProductTabSlide {
  id: string;
  index?: number;
  title: string;
  titleToFront: JSX.Element;
  altImage: string;
  titleImage: string;
  slug: string;
  linkBtn?: string;
  labelBtn?: string;
  titleBtn?: string;
  altBtn?: string;
  titleFirst?: string;
  titleSecond?: string;
  highLightedFirst: boolean;
  breakTitle?: boolean;
  descriptionDesktop: JSX.Element;
  descriptionMobile: JSX.Element;
  parentSlug?: string;
  //image: IncludePrefixResponsiveSizes;
  image: string;
  vimeoId?: {
    mobile: string;
    desktop: string;
  };
  tabId: string;
  fileUrl?: string;
  videoId?: string;
}

export interface ProductTab {
  id: string;
  title: string;
  slug: string;
  parentSlug?: string;
  children: Omit<ProductTabSlide, "tabId">[];
}

const PREFIX = `${process.env.BASE_PREFIX}images/ProductDetails/`;
const QUERO_LINK = "/";
const QUERO_LABEL = "Eu quero";

const detailTitle = [
  { title: "performance", titleToFront: "Performance" },
  { title: "conforto", titleToFront: "Conforto" },
  { title: "tecnologia", titleToFront: "Tecnologia" },
  { title: "design", titleToFront: "Design" },
  { title: "segurança", titleToFront: "Segurança" },
  { title: "connect ///me", titleToFront: "Connect ///Me" },
  // { title: 'seguranca', titleToFront: 'Segurança' },
  // { title: 'acessorios', titleToFront: 'Acessórios' },
  // { title: 'servicos', titleToFront: 'Serviços' },
];
export const productDetails: ProductTab[] = [
  //Performance
  {
    id: detailTitle[0].title,
    title: detailTitle[0].titleToFront,
    slug: detailTitle[0].title,
    children: [
      {
        id: formatString("RESPOSTA RÁPIDA E EFICIENTE"),
        slug: formatString("RESPOSTA RÁPIDA E EFICIENTE"),
        title: "RESPOSTA RÁPIDA E EFICIENTE",
        titleToFront: <>RESPOSTA RÁPIDA E EFICIENTE</>,
        highLightedFirst: true,
        parentSlug: detailTitle[0].title,
        altImage: "Vista aérea de motor de Fiat Titano na cor branca",
        titleImage: "RESPOSTA RÁPIDA E EFICIENTE",
        descriptionDesktop: (
          <p>
            O motor 2.2 Turbodiesel de 180cv e 40,8 kgfm (37,7 kgmf na versão
            manual) proporciona respostas rápidas e performance de ponta, não
            importa o tamanho da carga ou terreno.
          </p>
        ),
        descriptionMobile: (
          <p>
            O motor 2.2 Turbodiesel de 180cv e 40,8 kgfm (37,7 kgmf na versão
            manual) proporciona respostas rápidas e performance de ponta, não
            importa o tamanho da carga ou terreno.
          </p>
        ),
        image: performance[0].fullPath,
      },
      {
        id: formatString("Tração 4x4 com seletor"),
        slug: formatString("Tração 4x4 com seletor"),
        title: "Tração 4x4 com seletor",
        titleToFront: <>Tração 4x4 com seletor</>,
        highLightedFirst: true,
        parentSlug: detailTitle[0].title,
        altImage:
          "Vista interna de Fiat Titano com destaque para botão giratório de seletor de tração com escritos em branco: “2H”, “4H” e “Push 4L”.",
        titleImage: "Tração 4x4 com seletor",
        descriptionDesktop: (
          <p>
            A Nova Fiat Titano, otimiza a tração em qualquer condição de terreno
            ou carga. São três modos de tração: dois modos para alta velocidade
            e um modo para baixa velocidade. Garantindo a melhor capacidade off
            road mesmo em terrenos extremamente desafiadores.
          </p>
        ),
        descriptionMobile: (
          <p>
            A Nova Fiat Titano, otimiza a tração em qualquer condição de terreno
            ou carga. São três modos de tração: dois modos para alta velocidade
            e um modo para baixa velocidade. Garantindo a melhor capacidade off
            road mesmo em terrenos extremamente desafiadores.
          </p>
        ),
        image: performance[1].fullPath,
      },
      {
        id: formatString("Caçamba gigante"),
        slug: formatString("Caçamba gigante"),
        title: "Caçamba gigante",
        titleToFront: <>Caçamba gigante</>,
        highLightedFirst: true,
        parentSlug: detailTitle[0].title,
        altImage:
          "Vista traseira de Fiat Titano na cor vermelha com porta de caçamba aberta carregando sacos de cimento, feno, cordas, galões de leite e esteira de palha.",
        titleImage: "Caçamba gigante",
        descriptionDesktop: (
          <p>
            Aproveite a caçamba gigante com impressionantes 2,6m², capacidade
            volumétrica de até 1.314 litros e 1,020 quilos de carga.
          </p>
        ),
        descriptionMobile: (
          <p>
              Aproveite a caçamba gigante com impressionantes 2,6m², capacidade
              volumétrica de até 1.314 litros e 1,020 quilos de carga.
          </p>
        ),
        image: performance[2].fullPath,
      },
      {
        id: formatString("BLOQUEIO DO DIFERENCIAL TRASEIRO"),
        slug: formatString("BLOQUEIO DO DIFERENCIAL TRASEIRO"),
        title: "Bloqueio do Diferencial Traseiro",
        titleToFront: <>BLOQUEIO DO DIFERENCIAL TRASEIRO</>,
        highLightedFirst: true,
        parentSlug: detailTitle[0].title,
        altImage: "BLOQUEIO DO DIFERENCIAL TRASEIRO",
        titleImage: "BLOQUEIO DO DIFERENCIAL TRASEIRO",
        descriptionDesktop: (
          <p>
            Sistema alocado no eixo traseiro da sua picape garante que ambas as
            rodas traseiras girem na mesma velocidade, ajudando com uma tração adicional para enfrentar obstáculos que necessitem de ainda mais força.
          </p>
        ),
        descriptionMobile: (
          <p>
              Sistema alocado no eixo traseiro da sua picape garante que ambas as
              rodas traseiras girem na mesma velocidade, ajudando com uma tração adicional para enfrentar obstáculos que necessitem de ainda mais força.
          </p>
        ),
        image: performance[3].fullPath,
      },
      {
        id: formatString("Capacidade de reboque de até 3,5 Toneladas"),
        slug: formatString("Capacidade de reboque de até 3,5 Toneladas"),
        title: "Capacidade de reboque de até 3,5 Toneladas",
        titleToFront: <>Capacidade de reboque de até 3,5 Toneladas</>,
        highLightedFirst: true,
        parentSlug: detailTitle[0].title,
        altImage: "Capacidade de reboque de até 3,5 Toneladas",
        titleImage: "Capacidade de reboque de até 3,5 Toneladas",
        descriptionDesktop: (
          <p>
            Característica valiosa para transporte de cargas adicionais com
            segurança e eficiência.
          </p>
        ),
        descriptionMobile: (
          <p>
            Característica valiosa para transporte de cargas adicionais com
            segurança e eficiência.
          </p>
        ),
        image: performance[5].fullPath,
      },
    ],
  },
  //Conforto
  {
    id: detailTitle[1].title,
    title: detailTitle[1].titleToFront,
    slug: detailTitle[1].title,
    children: [
      {
        id: formatString("Ar-condicionado digital Dual Zone"),
        slug: formatString("Ar-condicionado digital Dual Zone"),
        title: "Ar-condicionado digital Dual Zone",
        titleToFront: <>Ar-condicionado digital Dual Zone</>,
        highLightedFirst: true,
        parentSlug: detailTitle[1].title,
        altImage:
          "Vista interna de Fiat Titano com destaque para controles do ar-condicionado dual zone.",
        titleImage: "Ar-condicionado digital Dual Zone",
        descriptionDesktop: (
          <p>
            Ar-condicionado digital dual zone, proporcionando ainda mais
            conforto para motorista e passageiros!
          </p>
        ),
        descriptionMobile: (
          <p>
            Ar-condicionado digital dual zone, proporcionando ainda mais
            conforto para motorista e passageiros!
          </p>
        ),
        image: conforto[0].fullPath,
      },
      {
        id: formatString("Saída de ar traseira com entrada USB"),
        slug: formatString("Saída de ar traseira com entrada USB"),
        title: "Saída de ar traseira com entrada USB",
        titleToFront: <>Saída de ar traseira com entrada USB</>,
        highLightedFirst: true,
        parentSlug: detailTitle[1].title,
        altImage:
          "Vista interna de Fiat Titano com destaque para saída de ar condicionado traseira.",
        titleImage: "Saída de ar traseira com entrada USB",
        descriptionDesktop: (
          <p>
            Proporcione mais conforto para os seus passageiros e tenha sempre um
            ambiente agradável em todo o interior da sua picape.
          </p>
        ),
        descriptionMobile: (
          <p>
            Proporcione mais conforto para os seus passageiros e tenha sempre um
            ambiente agradável em todo o interior da sua picape.
          </p>
        ),
        image: conforto[1].fullPath,
      },
      {
        id: formatString("Bancos de couro com ajuste elétrico"),
        slug: formatString("Bancos de couro com ajuste elétrico"),
        title: "Bancos de couro com ajuste elétrico",
        titleToFront: <>Bancos de couro com ajuste elétrico</>,
        highLightedFirst: true,
        parentSlug: detailTitle[1].title,
        altImage:
          "Vista interna de Fiat Titano com destaque para bancos em couro na cor preta.",
        titleImage: "Bancos de couro com ajuste elétrico",
        descriptionDesktop: (
          <p>
            Todo o conforto e sofisticação que você merece no interior da sua
            picape, com bancos em couro com ajustes elétricos dianteiros.
          </p>
        ),
        descriptionMobile: (
          <p>
              Todo o conforto e sofisticação que você merece no interior da sua
              picape, com bancos em couro com ajustes elétricos dianteiros.
          </p>
        ),
        image: conforto[2].fullPath,
      },
      {
        id: formatString("Interior funcional"),
        slug: formatString("Interior funcional"),
        title: "Interior funcional",
        titleToFront: <>Interior funcional</>,
        highLightedFirst: true,
        parentSlug: detailTitle[1].title,
        altImage:
          "Vista interna de Fiat Titano com destaque para suporte para bolsas e sacolas na cor preta.",
        titleImage: "Interior funcional",
        descriptionDesktop: (
          <p>
            Ganchos retráteis nas costas dos bancos dianteiros com capacidade de
            4kg.
          </p>
        ),
        descriptionMobile: (
          <p>
            Ganchos retráteis nas costas dos bancos dianteiros com capacidade de
            4kg.
          </p>
        ),
        image: conforto[3].fullPath,
      },
      {
        id: formatString("Bancos modulares rebatíveis"),
        slug: formatString("Bancos modulares rebatíveis"),
        title: "Bancos modulares rebatíveis",
        titleToFront: <>Bancos modulares rebatíveis</>,
        highLightedFirst: true,
        parentSlug: detailTitle[1].title,
        altImage:
          "Vista interna de Fiat Titano com destaque para bancos traseiros rebatidos proporcionando mais espaço para transportar carga.",
        titleImage: "Bancos modulares rebatíveis",
        descriptionDesktop: (
          <p>
            Amplie as possibilidades da sua Fiat Titano com um simples
            movimento.
          </p>
        ),
        descriptionMobile: (
          <p>
            Amplie as possibilidades da sua Fiat Titano com um simples
            movimento.
          </p>
        ),
        image: conforto[4].fullPath,
      },
      {
        id: formatString("17 porta-objetos"),
        slug: formatString("17 porta-objetos"),
        title: "17 porta-objetos",
        titleToFront: <>17 porta-objetos</>,
        highLightedFirst: true,
        parentSlug: detailTitle[1].title,
        altImage:
          "Vista interna de Fiat Titano com destaque porta garrafas da cabine do motorista.",
        titleImage: "17 porta-objetos",
        descriptionDesktop: (
          <p>
            São 27 litros distribuídos de forma inteligente e pensados para
            acomodar desde óculos de sol até ferramentas abaixo dos bancos
            traseiros.
          </p>
        ),
        descriptionMobile: (
          <p>
            São 27 litros distribuídos de forma inteligente e pensados para
            acomodar desde óculos de sol até ferramentas abaixo dos bancos
            traseiros.
          </p>
        ),
        image: conforto[5].fullPath,
      },
    ],
  },
  //Tecnologia
  {
    id: detailTitle[2].title,
    title: detailTitle[2].titleToFront,
    slug: detailTitle[2].title,
    children: [
      {
        id: formatString("Tecnologia que salta aos olhos"),
        slug: formatString("Tecnologia que salta aos olhos"),
        title: "Tecnologia que salta aos olhos",
        titleToFront: <>Tecnologia que salta aos olhos</>,
        highLightedFirst: true,
        parentSlug: detailTitle[2].title,
        altImage: "Tecnologia que salta aos olhos",
        titleImage: "Tecnologia que salta aos olhos",
        descriptionDesktop: (
          <p>
            No interior os features tecnológicos saltam aos olhos, como o
            infotainment de 10” direcionado para o motorista com navegação
            embarcada, conexão Android Auto e Apple Carplay, com capacidade de
            armazenamento de documentos e vídeos de até 10 gigas.
          </p>
        ),
        descriptionMobile: (
          <p>
            No interior os features tecnológicos saltam aos olhos, como o
            infotainment de 10” direcionado para o motorista com navegação
            embarcada, conexão Android Auto e Apple Carplay, com capacidade de
            armazenamento de documentos e vídeos de até 10 gigas.
          </p>
        ),
        image: tecnologia[1].fullPath,
      },
      {
        id: formatString("Keyless Entry N'Go"),
        slug: formatString("Keyless Entry N'Go"),
        title: "Keyless Entry N'Go",
        titleToFront: <>Keyless Entry N'Go</>,
        highLightedFirst: true,
        parentSlug: detailTitle[2].title,
        altImage: `Keyless Entry N'Go`,
        titleImage: `Keyless Entry N'Go`,
        descriptionDesktop: (
          <p>
            Sua Fiat Titano reconhece sua presença ao carregar as chaves, ela abre as portas ao tocar o botão na maçaneta e permite que você dê a partida utilizando o botão START/STOP ao entrar no carro.
          </p>
        ),
        descriptionMobile: (
          <p>
            Sua Fiat Titano reconhece sua presença ao carregar as chaves, ela abre as portas ao tocar o botão na maçaneta e permite que você dê a partida utilizando o botão START/STOP ao entrar no carro.
          </p>
        ),
        image: tecnologia[0].fullPath,
      },
      {
        id: formatString("Câmera 360° Off-Road"),
        slug: formatString("Câmera 360° Off-Road"),
        title: "Câmera 360° Off-Road",
        titleToFront: <>Câmera 360° Off-Road</>,
        highLightedFirst: true,
        parentSlug: detailTitle[2].title,
        altImage: `Vista interna de Fiat Titano com destaque para central multimídia demonstrando funcionamento de visão 360.`,
        titleImage: `Câmera 360° Off-Road`,
        descriptionDesktop: (
          <p>
            Aproveite 4 câmeras distribuídas no exterior do veículo que além de
            auxiliar o motorista na hora de estacionar, a Câmera 360° Off-Road
            também é ativada automaticamente quando obstáculos são detectados
            durante a direção.
          </p>
        ),
        descriptionMobile: (
          <p>
            Aproveite 4 câmeras distribuídas no exterior do veículo que além de
            auxiliar o motorista na hora de estacionar, a Câmera 360° Off-Road
            também é ativada automaticamente quando obstáculos são detectados
            durante a direção.
          </p>
        ),
        image: tecnologia[2].fullPath,
      },
    ],
  },
  //Design
  {
    id: detailTitle[3].title,
    title: detailTitle[3].titleToFront,
    slug: detailTitle[3].title,
    children: [
      {
        id: formatString("Sofisticação dos detalhes"),
        slug: formatString("Sofisticação dos detalhes"),
        title: "Sofisticação dos detalhes",
        titleToFront: <>Sofisticação dos detalhes</>,
        highLightedFirst: true,
        parentSlug: detailTitle[3].title,
        altImage:
          "Vista lateral de Fiat Titano na cor vermelha com destaque para espelho lateral com luz de segurança e detalhes cromados.",
        titleImage: "Sofisticação dos detalhes",
        descriptionDesktop: (
          <p>
              Retrovisores e maçanetas cromadas deixam o design robusto da Nova Fiat Titano ainda mais atraente.
          </p>
        ),
        descriptionMobile: (
          <p>
              Retrovisores e maçanetas cromadas deixam o design robusto da Nova Fiat Titano ainda mais atraente.
          </p>
        ),
        image: design[0].fullPath,
      },
      {
        id: formatString("Faróis em LED"),
        slug: formatString("Faróis em LED"),
        title: "Faróis em LED",
        titleToFront: <>Faróis em LED</>,
        highLightedFirst: true,
        parentSlug: detailTitle[3].title,
        altImage:
          "Vista lateral de Fiat Titano na cor vermelha com destaque para rodas cromadas de liga leve.",
        titleImage: "Faróis em LED",
        descriptionDesktop: (
          <p>
            Os faróis e DRL em LED combinados assinam a identidade da FIAT
            TITANO: robusta e funcional sem deixar de lado um design que cativa
            e faz qualquer um virar o pescoço para acompanhar essa linda gigante
            por onde quer que passe.
          </p>
        ),
        descriptionMobile: (
          <p>
            Os faróis e DRL em LED combinados assinam a identidade da FIAT
            TITANO: robusta e funcional sem deixar de lado um design que cativa
            e faz qualquer um virar o pescoço para acompanhar essa linda gigante
            por onde quer que passe.
          </p>
        ),
        image: design[2].fullPath,
      },
      {
        id: formatString("Interior amplo e moderno"),
        slug: formatString("Interior amplo e moderno"),
        title: "Interior amplo e moderno",
        titleToFront: <>Interior amplo e moderno</>,
        highLightedFirst: true,
        parentSlug: detailTitle[3].title,
        altImage:
          "Vista interna de Fiat Titano com destaque para painel do motorista indicando a velocidade do veículo.",
        titleImage: "Interior amplo e moderno",
        descriptionDesktop: (
          <p>
            O painel de instrumentos direcionado para o motorista e os
            acabamentos premium, combinados com um espaço interno
            impressionante, criam um conjunto único que alia acabamentos
            premium, tecnologia e conforto.
          </p>
        ),
        descriptionMobile: (
          <p>
            O painel de instrumentos direcionado para o motorista e os
            acabamentos premium, combinados com um espaço interno
            impressionante, criam um conjunto único que alia acabamentos
            premium, tecnologia e conforto.
          </p>
        ),
        image: design[3].fullPath,
      },
    ],
  },
  //Segurança
  {
    id: detailTitle[4].title,
    title: detailTitle[4].titleToFront,
    slug: detailTitle[4].title,
    children: [
      {
        id: formatString("Alerta saída de faixa"),
        slug: formatString("Alerta saída de faixa"),
        title: "Alerta saída de faixa",
        titleToFront: <>Alerta saída de faixa</>,
        highLightedFirst: true,
        parentSlug: detailTitle[4].title,
        altImage: "Alerta saída de faixa",
        titleImage: "Alerta saída de faixa",
        descriptionDesktop: (
          <p>
            Esse sistema detecta, através de uma câmera que reconhece linhas
            contínuas ou descontínuas, o cruzamento involuntário de uma linha.
            Para uma direção segura, a câmera analisa a imagem e aciona um
            alerta visual e sonoro em caso de desvio de direção.
          </p>
        ),
        descriptionMobile: (
          <p>
            Esse sistema detecta, através de uma câmera que reconhece linhas
            contínuas ou descontínuas, o cruzamento involuntário de uma linha.
            Para uma direção segura, a câmera analisa a imagem e aciona um
            alerta visual e sonoro em caso de desvio de direção.
          </p>
        ),
        image: seguranca[0].fullPath,
      },
      {
        id: formatString("Assistente de Partida em Rampas"),
        slug: formatString("Assistente de Partida em Rampas"),
        title: "Assistente de Partida em Rampas",
        titleToFront: <>Assistente de Partida em Rampas</>,
        highLightedFirst: true,
        parentSlug: detailTitle[4].title,
        altImage: `Assistente de Partida em Rampas`,
        titleImage: "Assistente de Partida em Rampas",
        descriptionDesktop: (
          <p>
            O Assistente de Partida em Rampas, como o próprio nome sugere,
            auxilia o condutor para arrancadas em locais íngremes, mantendo o
            freio acionado e a picape parada por alguns segundos, após a
            liberação do pedal de freio. Tempo suficiente para arrancar a Nova
            Fiat Titano com segurança.
          </p>
        ),
        descriptionMobile: (
          <p>
            O Assistente de Partida em Rampas, como o próprio nome sugere,
            auxilia o condutor para arrancadas em locais íngremes, mantendo o
            freio acionado e a picape parada por alguns segundos, após a
            liberação do pedal de freio. Tempo suficiente para arrancar a Nova
            Fiat Titano com segurança.
          </p>
        ),
        image: seguranca[6].fullPath,
      },
      {
        id: formatString("Assistência de estabilidade do reboque"),
        slug: formatString("Assistência de estabilidade do reboque"),
        title: "Assistência de estabilidade do reboque",
        titleToFront: <>Assistência de estabilidade do reboque</>,
        highLightedFirst: true,
        parentSlug: detailTitle[4].title,
        altImage: `Assistência de estabilidade do reboque`,
        titleImage: "Assistência de estabilidade do reboque",
        descriptionDesktop: (
          <p>
            O sistema de Assistência de Estabilidade do
            Reboque, monitora o movimento do reboque engatado e,
            se necessário, aplica frenagens seletivas, mantendo a estabilidade da picape e do reboque.
          </p>
        ),
        descriptionMobile: (
          <p>
            O sistema de Assistência de Estabilidade do
            Reboque, monitora o movimento do reboque engatado e,
            se necessário, aplica frenagens seletivas, mantendo a estabilidade da picape e do reboque.
          </p>
        ),
        image: seguranca[4].fullPath,
      },
      {
        id: formatString("Airbags de série"),
        slug: formatString("Airbags de série"),
        title: "Airbags de série",
        titleToFront: <>Airbags de série</>,
        highLightedFirst: true,
        parentSlug: detailTitle[4].title,
        altImage: `Airbags de série`,
        titleImage: "Airbags de série",
        descriptionDesktop: (
          <p>
            Robustez e performance, sem deixar a segurança de lado. A sua Titano
            vem equipada com 6 airbags: 2 laterais, 2 no estilo cortina e 2
            frontais.
          </p>
        ),
        descriptionMobile: (
          <p>
            Robustez e performance, sem deixar a segurança de lado. A sua Titano
            vem equipada com 6 airbags: 2 laterais, 2 no estilo cortina e 2
            frontais.
          </p>
        ),
        image: seguranca[5].fullPath,
      },
      {
        id: formatString("Controle de Estabilidade (ESP)"),
        slug: formatString("Controle de Estabilidade (ESP)"),
        title: "Controle de Estabilidade (ESP)",
        titleToFront: <>Controle de Estabilidade (ESP)</>,
        highLightedFirst: true,
        parentSlug: detailTitle[4].title,
        altImage: `Controle de Estabilidade (ESP)`,
        titleImage: "Controle de Estabilidade (ESP)",
        descriptionDesktop: (
          <p>
            A tecnologia detecta desvios na trajetória do veículo e atua para
            corrigi-los, trazendo mais segurança ao motorista e passageiros.
          </p>
        ),
        descriptionMobile: (
          <p>
            A tecnologia detecta desvios na trajetória do veículo e atua para
            corrigi-los, trazendo mais segurança ao motorista e passageiros.
          </p>
        ),
        image: seguranca[3].fullPath,
      },
      {
        id: formatString("Sensor de pressão dos pneus"),
        slug: formatString("Sensor de pressão dos pneus"),
        title: "Sensor de pressão dos pneus",
        titleToFront: <>Sensor de pressão dos pneus</>,
        highLightedFirst: true,
        parentSlug: detailTitle[4].title,
        altImage: `Sensor de pressão dos pneus`,
        titleImage: "Sensor de pressão dos pneus",
        descriptionDesktop: (
          <p>
            Permite que o motorista seja informado continuamente em caso de perda de pressão em um ou mais pneus diretamente na tela da Nova Fiat Titano, além de avisar sobre um possível furo antes que o pneu esvazie
          </p>
        ),
        descriptionMobile: (
          <p>
            Permite que o motorista seja informado continuamente em caso de perda de pressão em um ou mais pneus diretamente na tela da Nova Fiat Titano, além de avisar sobre um possível furo antes que o pneu esvazie
          </p>
        ),
        image: seguranca[7].fullPath,
      },
    ],
  },
];

export const getProductDetails = (pDetails: ProductTab[]): MenuLabels[] => {
  return pDetails.reduce<MenuLabels[]>((prev, item) => {
    return [
      ...prev,
      {
        numberId: 0,
        id: `data-${item.id}`,
        label: item.title,
        slug: item.slug,
        url: `/${item.slug}`,
        prefixRelation: PRODUCT_DETAILS_REF,
        isDetails: true,
      },
    ];
  }, []);
};

let index = -1;

export const allSlides: ProductTabSlide[] = productDetails.reduce(
  (prev, curr) => {
    return [
      ...prev,
      ...curr.children.map(c => {
        index++;
        return {
          ...c,
          index,
          parentSlug: curr.slug,
          tabId: curr.id,
        };
      }),
    ];
  },
  [] as ProductTabSlide[]
);

export default productDetails;
