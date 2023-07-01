import { SecondObject } from "./subobjeto";

export interface Employee {
    id?: number,
    nome: string,
    foto: string,
    email: string,
    subobjeto: SecondObject;
  }