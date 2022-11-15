import * as React from "react";
import { useCurrentWidth } from "../../hooks";
import NextSlide from "../UI/NextSlide";
import PrevSlide from "../UI/PrevSlide";

import * as S from "./styles";

interface ISliderProps<T, U> {
  items: T[];
  activeCategory?: string;
  renderSliderItem: (item: T, i: number) => React.ReactNode;
  renderActiveItem: React.ReactNode;
  categories?: U[];
  renderCategoryItem?: (item: U, i: number) => React.ReactNode;
  filter?: (item: T) => boolean;
}

function Slider<T, U>(props: ISliderProps<T, U>): React.ReactElement<ISliderProps<T, U>> {
  const [leftPosition, setLeftPosition] = React.useState<number>(0);

  const {
    items,
    renderSliderItem,
    renderActiveItem,
    categories,
    renderCategoryItem,
    filter,
    activeCategory,
  } = props;

  const sliderRef = React.useRef<HTMLDivElement>(null);

  console.log(!!filter ? items.filter(filter).length : undefined);

  const width = useCurrentWidth();

  React.useEffect(() => {
    if (window.innerWidth < 1200) setLeftPosition(0);
  }, [width]);

  React.useEffect(() => {
    setLeftPosition(0);
  }, [activeCategory]);

  function handlePrevClick() {
    setLeftPosition(leftPosition + 230);
  }

  function handleNextClick() {
    setLeftPosition(leftPosition - 230);
  }

  function visibleItemsCount() {
    let value = 3;
    switch (sliderRef.current?.clientWidth) {
      case 660:
        value = 3;
        break;
      case 430:
        value = 2;
        break;
      case 200:
        value = 1;
        break;
    }
    return value;
  }

  return (
    <S.SliderWrapper mTop={!!categories ? "100px" : "50px"}>
      {!!categories && !!renderCategoryItem && (
        <S.CategoriesList>{categories.map(renderCategoryItem)}</S.CategoriesList>
      )}
      <S.Slider ref={sliderRef}>
        <S.SliderContainer left={leftPosition}>
          {!!filter ? items.filter(filter).map(renderSliderItem) : items.map(renderSliderItem)}
        </S.SliderContainer>
        <S.SliderBtns>
          <PrevSlide
            className={leftPosition === 0 ? "disable" : undefined}
            onClick={handlePrevClick}
          />
          <NextSlide
            onClick={handleNextClick}
            className={
              leftPosition ===
              ((!!filter ? items.filter(filter).length : items.length) - visibleItemsCount()) * -230
                ? "disable"
                : undefined
            }
          />
        </S.SliderBtns>
      </S.Slider>
      <S.ActiveItem>{renderActiveItem}</S.ActiveItem>
    </S.SliderWrapper>
  );
}

export default Slider;
