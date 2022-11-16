export class ExpenseCategory {

    private _userId: bigint;
    private _id: bigint;
    private _name: string;

    constructor(userId: bigint, name: string) {
        this._userId = userId;
        this._name = name;
    }

    //Getters, Setters, Attributes

    get userId():bigint {
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

}