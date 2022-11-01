export interface ITeamPerson {
  name: string;
  description: string;
  img: string;
}

export interface IArrowSlide {
  className: string | undefined;
  onClick: () => void;
}
