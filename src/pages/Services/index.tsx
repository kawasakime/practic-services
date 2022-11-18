import * as React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";
import { config } from "../../configs/config";
import { IService, services } from "../../configs/services";
import Slider from "../../components/Slider";

const Services: React.FunctionComponent = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>(config.categories[0].key);
  const [activeItem, setActiveItem] = React.useState<IService>(
    services.filter((item) => item.category === activeCategory)[0]
  );

  return (
    <C.Wrapper>
      <S.Services>
        <C.Title>{config.services.title}</C.Title>

        <Slider
          items={services}
          activeCategory={activeCategory}
          categories={config.categories}
          renderCategoryItem={(item, i) => (
            <li
              className={activeCategory === item.key ? "active" : undefined}
              key={i}
              onClick={() => setActiveCategory(item.key)}>
              {item.title}
            </li>
          )}
          filter={(item) => item.category === activeCategory}
          renderSliderItem={(item, i) => (
            <C.SliderItem
              key={i}
              className={item.id === activeItem.id ? "active" : undefined}
              onClick={() => setActiveItem(item)}
              bg={`${config.url}/assets/img/services/${item.img}`}>
              <div className="bg-img"></div>
              <p>
                {item.title}
                <br />
                <span>{item.price} ₽</span>
              </p>
            </C.SliderItem>
          )}
          renderActiveItem={
            <S.ActiveService>
              <p className="title">{activeItem.title}</p>
              <p className="descr">{activeItem.description}</p>
              {activeItem.duration !== "" && (
                <p className="duration">
                  {config.services.itemTimeTitle} <span>{activeItem.duration}</span>
                </p>
              )}

              <p className="price">
                {config.services.itemPriceTitle} <span>{activeItem.price} ₽</span>
              </p>
              <S.ActiveServiceBg bgUrl={`${config.url}/assets/img/services/${activeItem.img}`} />
            </S.ActiveService>
          }
        />
      </S.Services>
    </C.Wrapper>
  );
};

export default Services;
