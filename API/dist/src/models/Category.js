"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Category {
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get parent_id() {
        return this._parent_id;
    }
    set parent_id(parent_id) {
        this._parent_id = parent_id;
    }
}
exports.default = Category;
