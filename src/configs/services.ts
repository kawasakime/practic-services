import { TCategories } from "./config";

export interface IService {
  id: number;
  title: string;
  price: number;
  description: string;
  duration: string;
  category: TCategories;
  img: string;
}

//[...document.querySelectorAll('.bordered')].map((item, i) => {return {id: i+1, title: item.querySelector('h3').innerText, price: item.querySelector('div').innerText, description: "", duration: "", category: "engine", img: item.querySelector('e-page--booking--jobs--item').getAttribute("a-bg")}})

export const services: IService[] = [
  {
    category: "engine",
    description: `
1) Проверка и считывание кодов ошибок электронных систем (ошибок двигателя, коробки, показаний всех датчиков);
2) Считывание параметров электронных систем управления ДВС и их анализ на отклонение от норм;
3) осмотр дроссельной заслонки на предмет загрязнения;
4) осмотр свечей зажигания и элементов системы зажигания;
5) осмотр подкапотного пространства (состояние навесных ремней, наличие течей, состояние шлангов, состояние и уровень тех.жидкостей, состояние воздушного фильтра.`,
    duration: "",
    id: 1,
    img: "1.jpg",
    price: 1590,
    title: "MotorFIT - диагностика ДВС и электронных систем",
  },
  {
    "id": 2,
    "title": "MotorFIT + - расширенная диагностика ДВС и электронных систем",
    "price": 2590,
    "description": `
    1) Считывание кодов ошибок электронных систем управления;
    2) Анализ параметров электронных систем управления ДВС;
    3) Осмотр свечей зажигания и элементов системы зажигания;
    4) Осмотр дроссельной заслонки на предмет загрязнения;
    5) Осмотр подкапотного пространства;
    6) Замер компрессии в цилиндрах двигателя внутреннего сгорания;
    7) Замер давления в топливной магистрали;
    8) Анализ выхлопных газов;
    `,
    "duration": "",
    "category": "engine",
    "img": "1.jpg",
  },
  {
    "id": 3,
    "title": "Прочистка дроссельной заслонки - ДВС до 2.4 л (включительно)",
    "price": 1590,
    "description": `
В услугу входит:
1) Снятие дроссельной заслонки;
2) Прочистка заслонки;
3) Установка заслонки;
4) Обучение (для электронных дроссельных заслонок).
Может потребоваться в качестве расходных материалов очиститель, прокладка под дроссель. Уточнять у мастера-приемщика`,
    "duration": "",
    "category": "engine",
    "img": "2.jpg",
  },
  {
    "id": 4,
    "title": "Прочистка дроссельной заслонки - ДВС свыше 2.4 л (включительно)",
    "price": 1890,
    "description": `
    \nВ услугу входит:
1) Снятие дроссельной заслонки;
2) Прочистка заслонки;
3) Установка заслонки;
4) Обучение (для электронных дроссельных заслонок).
Может потребоваться в качестве расходных материалов очиститель, прокладка под дроссель. Уточнять у мастера-приемщика`,
    "duration": "",
    "category": "engine",
    "img": "2.jpg",
  },
  {
    "id": 5,
    "title": "Аппаратная прочистка форсунок - ДВС до 2.4 л (включительно)",
    "price": 1890,
    "description": `
    В услугу входит:
    1) Отсоединение магистрали топливного насоса;
    2) Подключение аппарата;
    3) Операция по промывке;
    4) Подсоединение магистрали топливного насоса.
    Потребуется жидкость, ее стоимость нужно уточнять у мастеров-приемщиков.`,
    "duration": "",
    "category": "engine",
    "img": "3.jpg",
  },
  {
    "id": 6,
    "title": "Аппаратная прочистка форсунок - ДВС свыше 2.4 л (включительно)",
    "price": 2190,
    "description": `
    В услугу входит:
    1) Отсоединение магистрали топливного насоса;
    2) Подключение аппарата;
    3) Операция по промывке;
    4) Подсоединение магистрали топливного насоса.
    Потребуется жидкость, ее стоимость нужно уточнять у мастеров-приемщиков.`,
    "duration": "",
    "category": "engine",
    "img": "3.jpg",
  },
  {
    "id": 7,
    "title": "Диагностика ходовой части",
    "price": 690,
    "description": `
    В ходе осмотра ходовой части на подъемнике, комплексно проверяется:
    1) Состояние ходовой части;
    2) Состояние основных узлов подвески;
    3) Осматриваются осветительные приборы;
    4) Проверка уровня и состояния тех.жидкостей;
    5) Состояние навесных ремней;    
    `,
    "duration": "",
    "category": "chassis",
    "img": "4.jpg",
  },
  {
    "id": 8,
    "title": "Замена амортизатора подвески (за 1 ось)",
    "price": 2780,
    "description": `
    В услугу входит:
    1) Снятие колеса;
    2)Снятие стойки амортизатора;
    3) Проверка опоры амортизационной стойки, пружины, состояния пыльника;
    4) Замена амортизационной стойки/амортизатора;
    5) Установка стойки амортизатора;
    6) Установка колеса.
    `,
    "duration": "",
    "category": "chassis",
    "img": "5.jpg",
  },
  {
    "id": 9,
    "title": "Замена пыльника/отбойника амортизатора",
    "price": 2780,
    "description": `
    Данная услуга включает в себя:
    1) Снятие колеса;
    2) Снятие стойки амортизатора;
    3) Проверка опоры амортизационной стойки, пружины, состояния пыльника;
    4) Замена пыльника/отбойника;
    5) Установка стойки амортизатора;
    6) Установка колеса.
    `,
    "duration": "",
    "category": "chassis",
    "img": "6.jpg",
  },
  {
    "id": 10,
    "title": "Замена рулевой тяги",
    "price": 990,
    "description": `
    В пакет услуги входит:
    1) Снятие колеса;
    2) Снятие рулевой тяги;
    3)Снятие рулевого наконечника;
    4) Установка рулевой тяги;
    5)Установка рулевого наконечника;
    6) Установка колеса.
    `,
    "duration": "",
    "category": "chassis",
    "img": "7.jpg",
  },
  {
    "id": 11,
    "title": "Замена наконечника рулевой тяги",
    "price": 790,
    "description": `
    1) Снятие колеса;
    2) Снятие рулевого наконечника;
    3) Установка рулевого наконечника;
    4) Установка колеса.
    `,
    "duration": "",
    "category": "chassis",
    "img": "8.jpg",
  },
  {
    "id": 12,
    "title": "Замена подшипника левой ступицы передней оси",
    "price": 2090,
    "description": `
    1) Снятие колеса;
    2) Снятие поворотного кулака;
    3) Выпресовка ступици колеса;
    4) Перепресовка подшпника;
    5) Запресовка ступици колеса;
    6) Установка поворотного кулака;
    7) Установка колеса
    `,
    "duration": "",
    "category": "chassis",
    "img": "9.jpg",
  },
  {
    "id": 13,
    "title": "Диагностика тормозной системы",
    "price": 890,
    "description": `
      1) Проверка уровня, состояния, наличия утечек тормозной жидкости.
      2) Проверка тормозных колодок, дисков, шлангов.
      3) Проверка элементов педального узла тормозного механизма.
      4) Проверка элементов стояночного тормоза.
      5) Проверка главного тормозного цилиндра, вакуумного усилителя.
      6) Проверка суппортов и их составляющих.
      `,
    "duration": "",
    "category": "brake_system",
    "img": "10.jpg",
  },
  {
    "id": 14,
    "title": "Замена тормозной жидкости",
    "price": 990,
    "description": `
      В услугу входит:
      1) Подключение аппарата к тормозным штуцерам суппортов;
      2) Замена жидкости аппаратом;
      3) Выставление уровня тормозной жидкости;
      4) Проверка тормозов (педали тормоза).
      `,
    "duration": "",
    "category": "brake_system",
    "img": "11.jpg",
  },
  {
    "id": 15,
    "title": "Замена тормозных дисков",
    "price": 1590,
    "description": `
      В услугу входит:
      1) Снятие колеса;
      2) Снятие тормозного суппорта;
      3) Замена тормозного диска;
      4) Установка суппорта;
      5) Проверка направляющих и поршня суппорта;
      6) Установка новых тормозных колодок;
      7) Установка колеса;
      8) Проверка педали тормоза;
      9) Восстановление уровня тормозной жидкости (доведение до нормы).
      `,
    "duration": "",
    "category": "brake_system",
    "img": "12.jpg",
  },

  {
    "id": 16,
    "title": "Аппаратная замена масла в АКПП без снятия поддона",
    "price": 1590,
    "description": `
    В услугу входит:
    1) Подключение аппарата через теплообменник АКПП;
    2) Аппаратная замена;
    3) Выставление уровня жидкости в АКПП.
    `,
    "duration": "",
    "category": "transmission",
    "img": "13.jpg",
  },
  {
    "id": 17,
    "title": "Аппаратная замена масла в АКПП со снятием поддона",
    "price": 2690,
    "description": `
    В услугу входит:
    1) Слив масла;
    2) Снятие поддона;
    3) Замена фильтра АКПП;
    4) Замена прокладки поддона АКПП (либо герметик);
    5) Отчистка поддона АКПП;
    6) Установка поддона;
    7) Залив масла АКПП, равное слитому;
    8) Подключение аппарата через теплообменник;
    9) Замена масла АКПП аппаратом;
    10) Выставление уровня жидкости АКПП.
    `,
    "duration": "",
    "category": "transmission",
    "img": "14.jpg",
  },
  {
    "id": 18,
    "title": "Замена масла в МКПП",
    "price": 890,
    "description": `
    В услугу входит:
    1) Снятие и установка защиты картера двигателя;
    2) Слив-залив масла;
    3) Выставление уровня масла.
    `,
    "duration": "",
    "category": "transmission",
    "img": "15.jpg",
  },
  {
    "id": 1,
    "title": "Шиномонтаж R12",
    "price": 1500,
    "description": `
    1) Снятие колеса;
    2) Перебортовка шины;
    3) Балансировка колеса;
    4) Установка колеса.
    Цена указана за 4 колеса.
    В стоимость включены балансировочные грузики. Под низкопрофильной понимается резина с высотой профиля 45 и нижe
    `,
    "duration": "",
    "category": "tire_fitting",
    "img": "16.jpg",
  },
  {
    "id": 2,
    "title": "Шиномонтаж R13",
    "price": 1660,
    "description": `
    1) Снятие колеса;
    2) Перебортовка шины;
    3) Балансировка колеса;
    4) Установка колеса.
    Цена указана за 4 колеса.
    В стоимость включены балансировочные грузики. Под низкопрофильной понимается резина с высотой профиля 45 и ниж
    `,
    "duration": "",
    "category": "tire_fitting",
    "img": "16.jpg",
  },
  {
    "id": 3,
    "title": "Шиномонтаж R14",
    "price": 1840,
    "description": `
    1) Снятие колеса;
    2) Перебортовка шины;
    3) Балансировка колеса;
    4) Установка колеса.
    Цена указана за 4 колеса.
    В стоимость включены балансировочные грузики. Под низкопрофильной понимается резина с высотой профиля 45 и ниж
    `,
    "duration": "",
    "category": "tire_fitting",
    "img": "16.jpg",
  },
  {
    "id": 4,
    "title": "Шиномонтаж R15",
    "price": 2000,
    "description": `
    1) Снятие колеса;
    2) Перебортовка шины;
    3) Балансировка колеса;
    4) Установка колеса.
    Цена указана за 4 колеса.
    В стоимость включены балансировочные грузики. Под низкопрофильной понимается резина с высотой профиля 45 и ниж
    `,
    "duration": "",
    "category": "tire_fitting",
    "img": "16.jpg",
  },
];
