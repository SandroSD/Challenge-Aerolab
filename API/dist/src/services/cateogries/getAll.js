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
const Category_1 = __importDefault(require("../../models/Category"));
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield axios_1.default.get(`${process.env["BASE_URL"]}/categories`);
        let categories = [];
        data.categories.forEach((c) => {
            const category = new Category_1.default();
            category.id = c.id;
            category.name = c.name;
            category.parent_id = c.parent_id;
            categories.push(category);
        });
        return nest(categories);
    }
    catch (error) {
        console.log(error);
    }
});
const nest = (categories, id = null, link = "parent_id") => categories
    .filter((item) => item[link] === id)
    .map((item) => (Object.assign(Object.assign({}, item), { children: nest(categories, item.id) })));
exports.default = getAll;
