export default class Category {
  private _id: string;
  private _name: string;
  private _parent_id: number;

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

  get parent_id(): number {
    return this._parent_id;
  }

  set parent_id(parent_id: number) {
    this._parent_id = parent_id;
  }
}
