import { IDetail } from "entities/Service";

export interface IRequest {
  _id: string;
  requestNumber: number;
  patientId: string;
  requestDetails: IDetail[];
}
