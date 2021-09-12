import moment from "moment";

export default class Product {
  private _id: string;
  private _name: string;
  private _price: number;
  private _presentation: string;
  private _brand: string;
  private _photo: string;
  private _originalPrice: number;
  private _updatedAt: moment.Moment;
  private _arsPrice: number;

  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get price(): number {
    return this._price;
  }

  set price(price: number) {
    this._price = price;
  }

  get presentation(): string {
    return this._presentation;
  }

  set presentation(presentation: string) {
    this._presentation = presentation;
  }

  get brand(): string {
    return this._brand;
  }

  set brand(brand: string) {
    this._brand = brand;
  }

  get photo(): string {
    return this._photo;
  }

  set photo(photo: string) {
    this._photo = photo;
  }

  get originalPrice(): number {
    return this._originalPrice;
  }

  set originalPrice(originalPrice: number) {
    this._originalPrice = originalPrice;
  }

  get updatedAt(): moment.Moment {
    return this._updatedAt;
  }

  set updatedAt(updatedAt: moment.Moment) {
    this._updatedAt = updatedAt;
  }

  get arsPrice(): number {
    return this._arsPrice;
  }

  set arsPrice(arsPrice: number) {
    this._arsPrice = arsPrice;
  }
}
