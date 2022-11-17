export class Expense {

    private _userId: bigint;
    private _id: bigint;
    private _name: string;
    private _amount: bigint;
    private _date: Date;
    private _categoryId: bigint;

    constructor(id: bigint, userId: bigint, name: string, amount: bigint, date: Date, categoryId: bigint) {
        this._id = id,
        this._userId = userId;
        this._name = name;
        this._amount = amount;
        this._date = date;
        this._categoryId = categoryId;
    }

    //Getters, Setters, Attributes

    get userId(): bigint {
        return this._userId;
    }
    set userId(userId: bigint) {
        this._userId = userId;
    }

    get id():bigint {
        return this._id;
    }
    set id(id: bigint) {
        this._id = id;
    }

    get name():string {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }

    get amount():bigint {
        return this._amount;
    }
    set amount(amount: bigint) {
        this._amount = amount;
    }

    get date():Date {
        return this._date;
    }
    set date(date: Date) {
        this._date = date;
    }

    get categoryId():bigint {
        return this._categoryId;
    }
    set categoryId(categoryId: bigint) {
        this._categoryId = categoryId;
    }

}