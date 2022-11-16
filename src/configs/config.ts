import { IBenefitsItem, ICardItem, ISocialItem, ITeamPerson } from "../interfaces/components";

export type TCategories = "cakes" | "cookie" | "chocolate" | "bakery" | "bread";

export interface IConfig {
  url: string;
  title: string;
  companyName: string;
  information: {
    address: string;
    phone: string;
    coord: [number, number];
    timeWork: string;
    socials: ISocialItem[];
  };
  colors: {
    primary: string;
    secondary: string;
    teriary: string;
    blackText: string;
    whiteText: string;
  };
  navigation: { title: string; path: string }[];
  categories: { title: string; key: TCategories }[];
  mainSection: {
    description: string;
    btnText: string;
  };
  aboutUs: {
    title: string;
    description: string;
    btnText: string;
  };
  registration: {
    title: string;
    description: string;
  };
  services: {
    title: string;
    itemTimeTitle: string;
    itemPriceTitle: string;
  };
  team: {
    title: string;
    list: ITeamPerson[];
  };
  cards: {
    title: string;
    items: ICardItem[];
  };
  benefits: {
    title: string;
    items: IBenefitsItem[];
  };
}

export const config: IConfig = {
  // Название сайта (название вкладки в браузере)
  url: "https://wyylame.github.io/services-sweetshop",
  // url: "./",
  title: "Кондитерская Sweet Bear",
  // Название фирмы для лого и некоторых мест
  companyName: "SWEET BEAR",
  information: {
    address: "г. Ростов-на-Дону, Кировский пр., 90/2",
    phone: "+7 903 406-36-96",
    coord: [47.2304364, 39.7266294],
    timeWork: "пн-вс: 10:00 – 21:00",
    socials: [
      { title: "Вконтакте", link: "https://vk.com" },
      { title: "Телеграм", link: "https://web.telegram.org/k/" },
    ],
  },
  // цвета
  colors: {
    primary: "#392922",
    secondary: "#FFFFFF",
    teriary: "#2E201B",
    blackText: "#000000",
    whiteText: "#fff",
  },
  navigation: [
    {
      title: "О нас",
      path: "/about-us",
    },
    {
      title: "Ассортимент",
      path: "/services",
    },
    {
      title: "Заказать",
      path: "/registration",
    },
    {
      title: "Команда",
      path: "/team",
    },
    {
      title: "Контакты",
      path: "/contacts",
    },
  ],
  categories: [
    { title: "Торты", key: "cakes" },
    { title: "Печенье", key: "cookie" },
    { title: "Шоколад", key: "chocolate" },
    { title: "Выпечка", key: "bakery" },
    { title: "Хлеб", key: "bread" },
  ],
  mainSection: {
    description:
      "Наша кондитерская предлагает Вам богатый выбор недорогих готовых кондитерских изделий, приобрести которые Вы можете на нашем официальном сайте или в фирменном магазине.",
    btnText: "Наш ассортимент",
  },
  aboutUs: {
    title: "О нас",
    description:
      "Наша дружная команда кондитеров влюблены в искусство выпечки, кремов и глазури. Мы находим неиссякаемый источник идей в Ваших предложениях, а искренние эмоции и отзывы вдохновляют нас экспериментировать со вкусами и создавать нежные десерты. С радостью поможем подобрать начинки и сделаем особенный дизайн по Вашему заказу для семейного праздника или важного события!",
    btnText: "Наш ассортимент",
  },
  registration: {
    title: "Закажите торт прямо сейчас",
    description:
      "Оставьте заявку, и в течение 10 минут наш сотрудник перезвонит Вам, чтобы согласовать заказ.",
  },
  services: {
    title: "Наш ассортимент",
    itemTimeTitle: "Срок годности:",
    itemPriceTitle: "Стоимость: ",
  },
  team: {
    title: "Наша команда",
    list: [
      {
        name: "Анастасия",
        description:
          "Анастасия молодой мастер в создании уникальных тортов. Как вам свадебный шедевр в 4 тонны в виде королевского дворца, причем, с микроскопическими украшениями тончайшего мастерства? Это все говорит о том, что для Анастасии не существует невыполнимых задач!",
        img: "1.jpg",
      },
      {
        name: "Екатерина",
        description:
          "Многие кондитеры уже знают нашего мастера - Екатерину. Она поразила наших клиентов десертами, но не простыми, а геометрическими. Тонкий вкус отличает молодую мастерицу, а также уникальное сочетание цветов, текстур, порой, даже парадоксальные явления из будущего - её узнаваемые десерты",
        img: "2.jpg",
      },
      {
        name: "Денис",
        description:
          "Денису нравится работать с шоколадом, искать новые формы и сочетания вкусов, поэтому он делает конфеты. Когда гость не хочет заказывать целый десерт, он берет конфету — это так круто. Конфета — маленькая взятка совести с «греховной» начинкой внутри, 12 граммов счастья только для себя, дань уважения к классике",
        img: "3.jpg",
      },
      {
        name: "Анна",
        description:
          "Торты и различные десерты в исполнении Анны заказывают из абсолютно разных точек мира! Францию часто называют «родиной кондитеров», но даже там уже успели опробовать и оценить искусные десерты Анны",
        img: "4.jpg",
      },
    ],
  },
  cards: {
    title: "Почему стоит выбрать нас?",
    items: [
      {
        title: "Индивидуальный подход",
        descr:
          "Мы можем подобрать торт не только по вашему вкусу в буквальном смысле этой фразы, но и по тематике вашего праздника: от детского дня рождения до годовщины свадьбы. Ограничивает лишь фантазия!",
        img: "icon1.png",
      },
      {
        title: "Команда профессионалов",
        descr:
          "В нашей кондитерской работают профессионалы своего дела, которые не только будут прислушиваться к вашим пожеланиям, но и смогут посоветовать вкусовые сочетания и варианты украшения на свой вкус в том случае, если вы не хотите ничего решать.",
        img: "icon2.png",
      },
      {
        title: "Эстетичность",
        descr:
          "Мы не предлагаем банальных решений по украшению кондитерских изделий, а выдерживаем их в эстетике, близкой самой кондитерской. Таким образом, просматривая каталог работ, вы сможете представить готовый результат того, что вам необходимо.",
        img: "icon3.png",
      },
    ],
  },
  benefits: {
    title: "Попробуйте наши сладости лучшего качества",
    items: [
      {
        icon: "icon_1.png",
        descr: "Мы используем только самые свежие и высококачественные продукты",
      },
      {
        icon: "icon_2.png",
        descr:
          "Все продукты, с которыми работают специалисты, исключительной свежести. Сами заказы изготавливаются в день, предшествующий мероприятию",
      },
      {
        icon: "icon_3.png",
        descr: "Вы можете выбрать самые нестандартные размеры домашних тортов для вашего праздника",
      },
      {
        icon: "icon_4.png",
        descr: "Необычные вкусовые сочетания Вас приятно удивят.",
      },
    ],
  },
};
