import express from "express";
import { AppointmentRouter } from "../modules/appointment/appointment.router";
import { TestDocumentRouter } from "../modules/test/test.router";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/appointment",
    route: AppointmentRouter,
  },
  {
    path: "/test_document",
    route: TestDocumentRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export const Routers = router;
