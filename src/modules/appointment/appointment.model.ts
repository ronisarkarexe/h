import { Schema, model } from "mongoose";
import { AppointmentModel, IAppointment } from "./appointment.interface";

export const UserSchema: Schema<IAppointment> = new Schema<
  IAppointment,
  AppointmentModel
>(
  {
    startDay: { type: String, required: true },
    startTime: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Appointment = model<IAppointment, AppointmentModel>(
  "Appointment",
  UserSchema
);
