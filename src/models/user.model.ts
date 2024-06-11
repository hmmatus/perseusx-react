export type User = {
  name: string;
  favFood: string;
  favMovie: string;
  status: statusEnum;
  date?: string;
};

export enum statusEnum {
  Active = "Active",
  Inactive = "Inactive",
}
