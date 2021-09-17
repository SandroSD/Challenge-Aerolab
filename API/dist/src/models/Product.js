"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
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
    get price() {
        return this._price;
    }
    set price(price) {
        this._price = price;
    }
    get presentation() {
        return this._presentation;
    }
    set presentation(presentation) {
        this._presentation = presentation;
    }
    get brand() {
        return this._brand;
    }
    set brand(brand) {
        this._brand = brand;
    }
    get photo() {
        return this._photo;
    }
    set photo(photo) {
        this._photo = photo;
    }
    get originalPrice() {
        return this._originalPrice;
    }
    set originalPrice(originalPrice) {
        this._originalPrice = originalPrice;
    }
    get updatedAt() {
        return this._updatedAt;
    }
    set updatedAt(updatedAt) {
        this._updatedAt = updatedAt;
    }
    get arsPrice() {
        return this._arsPrice;
    }
    set arsPrice(arsPrice) {
        this._arsPrice = arsPrice;
    }
}
exports.default = Product;
