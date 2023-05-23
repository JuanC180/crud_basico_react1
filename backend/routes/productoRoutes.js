
import express from 'express';
import { registrar, listar, actualizarProducto, eliminar } from '../controllers/productoController.js';

const router = express.Router();


router.post("/", registrar);
router.get("/", listar);
router.put("/:id", actualizarProducto);
router.delete("/:id", eliminar)

export default router;
