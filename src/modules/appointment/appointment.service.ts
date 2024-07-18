import { IAppointment } from "./appointment.interface";
import { Appointment } from "./appointment.model";

const createAppointment = async (
  payload: IAppointment
): Promise<IAppointment> => {
  const result = await Appointment.create(payload);
  return result;
};

const getAllAppointments = async (): Promise<IAppointment[]> => {
  const result = await Appointment.find({});
  return result;
};

const getAppointment = async (
  payload: string
): Promise<IAppointment | null> => {
  const result = await Appointment.findOne({ _id: payload });
  return result;
};

const updateAppointment = async (
  userId: string,
  payload: Partial<IAppointment>
) => {
  const result = await Appointment.findOneAndUpdate({ _id: userId }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteAppointment = async (id: string): Promise<void> => {
  await Appointment.deleteOne({ _id: id });
};

export const AppointmentService = {
  createAppointment,
  getAllAppointments,
  getAppointment,
  updateAppointment,
  deleteAppointment,
};
