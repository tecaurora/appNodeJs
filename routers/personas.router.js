import express from "express";
import { Tarea } from "../models/tarea.model.js";

export const personasRouter = express.Router();

// GET /
personasRouter.get("/", async (req, res) => {
  const tareas = await Tarea.findAll();
  res.send(tareas);
});

// GET /:id
personasRouter.get("/:id", async (req, res) => {
  const tarea = await Tarea.findByPk(req.params.id);
  res.send(tarea);
});

// POST /
personasRouter.post("/", async (req, res) => {
  const nuevaTarea = await Tarea.create({
    descripcion: req.body.descripcion,
    lista: req.body.lista,
  });
  res.send(nuevaTarea);
});

// PUT /:id
personasRouter.put("/:id", async (req, res) => {
  await Tarea.update(
    { descripcion: req.body.descripcion, lista: req.body.lista },
    { where: { id: req.params.id } }
  );
  res.send("ok");
});

// DELETE /:id
personasRouter.delete("/:id", async (req, res) => {
  await Tarea.destroy({ where: { id: req.params.id } });
  res.send("ok");
});
