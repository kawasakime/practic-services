import { ITeamPerson } from "../interfaces/components";

export type TCategories =
  | "haircuts"
  | "beards"
  | "care"
  | "additional"
  | "staining";

export interface IConfig {
  title: string;
  companyName: string;
  information: {
    address: string,
    phone: string,
    coord: [number, number]
  }
  colors: {
    primary: string;
    secondary: string;
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
  team: {
    title: string;
    list: ITeamPerson[];
  };
}

export const config: IConfig = {
  // Название сайта (название вкладки в браузере)
  title: "Leader - парикмахерская для лучших",
  // Название фирмы для лого и некоторых мест
  companyName: "Leader",
  information: {
    address: 'г. Ростов-на-Дону, пл. Гагарина 1',
    phone: '+7 900 000 00 00',
    coord: [47.2372031, 39.7120899]
  },
  // цвета
  colors: {
    primary: "#111518",
    secondary: "#ffffff",
  },
  navigation: [
    {
      title: "О нас",
      path: "/about-us",
    },
    {
      title: "Услуги",
      path: "/services",
    },
    {
      title: "Запись",
      path: "/registration",
    },
    {
      title: "Барберы",
      path: "/team",
    },
    {
      title: "Контакты",
      path: "/contacts",
    },
  ],
  categories: [
    { title: "Стрижки", key: "haircuts" },
    { title: "Борода и бритьё", key: "beards" },
    { title: "Уход", key: "care" },
    { title: "Доп. сервис", key: "additional" },
    { title: "Окрашивание", key: "staining" },
  ],
  mainSection: {
    description:
      "Барбершоп в центре твоего города. Именно то, что нужно настоящим лидерам",
    btnText: "Наши услуги",
  },
  aboutUs: {
    title: "О нас",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. ",
    btnText: "Записаться",
  },
  registration: {
    title: "Запишитесь к нам прямо сейчас",
    description:
      "Оставьте заявку, и в течение 10 минут наш сотрудник перезвонит Вам, чтобы согласовать день, время и мастера для записи.",
  },
  team: {
    title: "Наши барберы",
    list: [
      {
        name: "Борис",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
        img: "1.jpg",
      },
      {
        name: "Роман",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
        img: "2.jpg",
      },
      {
        name: "Антонио",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
        img: "3.jpg",
      },
      {
        name: "Алексей",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
        img: "4.jpg",
      },
    ],
  },
};
