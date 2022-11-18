import { IBenefitsItem, ICardItem, ISocialItem, ITeamPerson } from "../interfaces/components";

export type TCategories = "engine" | "chassis" | "transmission" | "brake_system" | "tire_fitting";
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
  url: "https://wyylame.github.io/services-carservice",
  // url: "./",
  title: "Автосервис WAY WAY",
  // Название фирмы для лого и некоторых мест
  companyName: "WAY WAY",
  information: {
    address: "г. Ростов-на-Дону, ул. Таганрогская, 63",
    phone: "+7 960 452-66-66",
    coord: [47.2648352, 39.6733323],
    timeWork: "пн-вс: 10:00 – 23:00",
    socials: [
      { title: "Вконтакте", link: "https://vk.com" },
      { title: "Телеграм", link: "https://web.telegram.org/k/" },
    ],
  },
  // цвета
  colors: {
    primary: "#0F1F3E",
    secondary: "#ffffff",
    teriary: "#051026", // второй цвет для градиента
    blackText: "#000000",
    whiteText: "#ffffff",
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
      title: "Записаться",
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
    { title: "Двигатель", key: "engine" },
    { title: "Ходовая часть", key: "chassis" },
    { title: "Трансмиссия", key: "transmission" },
    { title: "Тормозная система", key: "brake_system" },
    { title: "Шиномонтаж", key: "tire_fitting" },
  ],
  mainSection: {
    description:
      "Если Вы ищете надёжного исполнителя по обслуживанию Вашего авто – добро пожаловать! Наша автомастерская укомплектована современным диагностическим и ремонтным оборудованием. А специалисты с огромным опытом работы и профессиональным подходом обслужат Ваш автомобиль быстро и качественно.",
    btnText: "Наш ассортимент",
  },
  aboutUs: {
    title: "О нас",
    description:
      "Мы рады будем помочь Вам осуществить ремонт и техническое обслуживание вашего автомобиля в кратчайшие сроки и с минимальными затратами. Наши специалисты быстро и квалифицированно подберут для Вашего автомобиля необходимые комплектующие и запасные части. К Вашим услугам широкий ассортимент оригинальных запасных частей в наличии на складе Компании, при отсутствии нужной детали на складе, заказ и доставка осуществляется в сжатые сроки.  На все работы по ремонту автомобилей предоставляется гарантия.",
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
        name: "Антон",
        description:
          "Автомобиль - это очень сложное механическое устройство, со множеством хитростей и нюансов. Знать все о своем автомобиле очень сложно, тем более не имея многолетнего опыта вождения. Однако есть - Антон, который поможет исправить или починить любую неисправность. Он может вернуть к жизни заглохший мотор или привести в порядок тормоза, да практически все может сделать. Поэтому вам не обязательно проводить под капотом своего авто несколько часов в день, достаточно просто обратиться за помощью к Антону.",
        img: "1.jpg",
      },
      {
        name: "Денис",
        description:
          "Денис занимается делом, которое ему нравится, и получает от него удовольствие. В детстве он часто помогал отцу. В гараже Денис следил за ремонтом автомобиля. Он накопил огромный опыт и знания. Теперь он может диагностировать поломку автомобилей на глаз. Сейчас Денис расширяет свой кругозор, читает книги об автомобилях.",
        img: "2.jpg",
      },
      {
        name: "Кирилл",
        description:
          "Не все умеют должным образом заботься о своем железном коне. Не все могут устранить неисправность или неполадку в нем. Как тут обойтись без квалифицированного автомеханика? Поэтому для Кирилла профессия автомеханика стала главной целью в жизни.",
        img: "3.jpg",
      },
    ],
  },
  cards: {
    title: "Награды и достижения",
    items: [
      {
        title: "Forbes 2021",
        descr: "1-е место. Самая выгодная франшиза России по версии Forbes 2021",
        img: "1.svg",
      },
      {
        title: "РБК 2020",
        descr: "Топ-3 в рейтинге самых динамично развивающихся в России франшиз",
        img: "2.svg",
      },
      {
        title: "Forbes 2020",
        descr: "Топ-3 30 самых выгодных франшиз России по версии Forbes 2020",
        img: "3.svg",
      },
      {
        title: "Golden Brand 2019",
        descr: "Золотая франшиза, Франчайзер года",
        img: '4.png'
      }
    ],
  },
  benefits: {
    title: "Лучшие, потому что",
    items: [
      {
        icon: "icon_1.png",
        descr: "Используем современные технологии и ставим интересы клиента на первое место.",
      },
      {
        icon: "icon_2.png",
        descr: "Выполняем все поставленные задачи оперативно и в заявленные сроки.",
      },
      {
        icon: "icon_3.png",
        descr:
          "Мы гарантируем, что автомобиль после обслуживания будет работать надёжно. Мы хотим, чтобы вы и ваши близкие чувствовали себя в безопасности.",
      },
      {
        icon: "icon_4.png",
        descr:
          "Вы всегда можете узнать, кто и что делает с вашим автомобилем — каждая станция оборудована камерами.",
      },
    ],
  },
};
