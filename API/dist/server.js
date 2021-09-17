"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./src/routes"));
const cors_1 = __importDefault(require("cors"));
const router = (0, express_1.default)();
router.use((0, cors_1.default)());
router.use((0, morgan_1.default)("dev"));
router.use(express_1.default.urlencoded({ extended: false }));
router.use(express_1.default.json());
require("dotenv").config({ path: __dirname + "/.env" });
/** Routes */
router.use(routes_1.default);
/** Error handling */
router.use((req, res, next) => {
    const error = new Error("not found");
    return res.status(404).json({
        message: error.message,
    });
});
/** Server */
const httpServer = http_1.default.createServer(router);
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8080;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
