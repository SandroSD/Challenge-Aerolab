"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getAll_1 = __importDefault(require("./products/getAll"));
const getAll_2 = __importDefault(require("./categories/getAll"));
const router = express_1.default.Router();
router.get("/products", getAll_1.default);
router.get("/categories", getAll_2.default);
exports.default = router;
