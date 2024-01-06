import { TAddress } from "entities/Patient";

type Labor = {
  _id: string | number;
  name: string;
  isActive: boolean;
  createdAt: Date;
  address: TAddress;
};

export type TLabor = Omit<Labor, "createdAt" | "address">;