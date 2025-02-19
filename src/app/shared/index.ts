import { FormControl } from '@angular/forms';

export type FormModel<T> = {
  [Property in keyof T]: FormControl<T[Property]>;
};

declare const brand: unique symbol;

export type Brand<T, TBrand extends string> = T & { [brand]: TBrand };
