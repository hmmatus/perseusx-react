// * Hector Matus, 11/06/2024 User model for the application.
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
