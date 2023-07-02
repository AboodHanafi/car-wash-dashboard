export type ServicesType = {
  id: number;
  name: string;
  time: string;
  cost: string;
};

export type CouponsType = {
  coupon_code: string;
  number: string;
};

export type LocationsType = {
  id: string;
  employeesNumber: number;
  locationName: string;
};
export type EmployeesType = {
  id: string;
  name: string;
  location: string;
};
export type WorkDays = { day: string; isworking: boolean };

export type Nullable<T> = T | null;
