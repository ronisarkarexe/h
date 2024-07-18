import { Model } from "mongoose";

export interface IAppointment {
  startDay: string;
  startTime: string;
}

export type AppointmentModel = Model<IAppointment, object>;
