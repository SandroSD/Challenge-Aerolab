"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const moment_1 = __importDefault(require("moment"));
const Product_1 = __importDefault(require("../../models/Product"));
const getCotizacion_1 = __importDefault(require("../dollar/getCotizacion"));
const getAllService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("URL: ", `${process.env["BASE_URL"]}/products`);
        const { data } = yield axios_1.default.get(`${process.env["BASE_URL"]}/products`);
        const dollarRes = yield (0, getCotizacion_1.default)();
        let products = [];
        data.products.forEach((p) => {
            const product = new Product_1.default();
            product.id = p.id;
            product.name = p.name;
            product.price = p.price;
            product.presentation = p.presentation;
            product.brand = p.brand;
            product.photo = p.photo;
            product.originalPrice = p.originalPrice;
            product.updatedAt = p.updatedAt;
            product.arsPrice = Number((product.originalPrice * (dollarRes === null || dollarRes === void 0 ? void 0 : dollarRes.rate)).toFixed(2));
            products.push(product);
        });
        products = products.filter((p) => (0, moment_1.default)(p.updatedAt) > (0, moment_1.default)().startOf("day").subtract(1, "month"));
        return {
            data: products,
            count: products.length,
        };
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = getAllService;
