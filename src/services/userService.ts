import { User } from "../domain/user";
import { apiURL } from "../utils/utils";

export class UserService {
    private _currentUser: User;

    constructor() {
        this._currentUser = null as any;
    }

    public async getUsers(): Promise<User[]> {
        try {
            const response = await window.fetch(apiURL + "/users/", {
                method: "GET",
                headers: {
                    Accept: "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = (await response.json());

            // console.log("result is: ", JSON.stringify(result, null, 4));

            return <User[]>JSON.parse(JSON.stringify(result, null, 4));

        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return null as any;
        }
    }

    public async getUserById(userId: bigint): Promise<User> {
        try {
            const response = await window.fetch(apiURL + "/users/" + userId.toString(), {
                method: "GET",
                headers: {
                    Accept: "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = (await response.json());

            // console.log("result is: ", JSON.stringify(result, null, 4));

            return <User>JSON.parse(JSON.stringify(result, null, 4));

        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return null as any;
        }
    }

    public async register(newUser: User): Promise<User> {
        try {
            const response = await window.fetch(apiURL + "/register", {
                method: "POST",
                headers: {
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    newUser
                })
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = (await response.json());

            // console.log("result is: ", JSON.stringify(result, null, 4));

            this.currentUser = <User>JSON.parse(JSON.stringify(result, null, 4));

            return <User>JSON.parse(JSON.stringify(result, null, 4));

        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return null as any;
        }
    }

    public async editUser(newUser: User): Promise<User> {
        try {
            const response = await window.fetch(apiURL + "/users/" + newUser.id.toString(), {
                method: "PUT",
                headers: {
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    newUser
                })
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = (await response.json());

            // console.log("result is: ", JSON.stringify(result, null, 4));

            return <User>JSON.parse(JSON.stringify(result, null, 4));

        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return null as any;
        }
    }

    public async deleteUser(id: bigint): Promise<void> {
        try {
            const response = await window.fetch(apiURL + "/users/" + id.toString(), {
                method: "DELETE",
                headers: {
                    Accept: "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = (await response.json());

            // console.log("result is: ", JSON.stringify(result, null, 4));

        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
        }
    }

    public async login(user: User): Promise<User> {
        try {
            const response = await window.fetch(apiURL + "/login", {
                method: "POST",
                headers: {
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    user
                })
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = (await response.json());

            this.currentUser = <User>JSON.parse(JSON.stringify(result, null, 4));

            // console.log("result is: ", JSON.stringify(result, null, 4));

            return <User>JSON.parse(JSON.stringify(result, null, 4));

        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
            return null as any;
        }
    }

    public async logout(user: User): Promise<void> {
        try {
            const response = await window.fetch(apiURL + "/logout", {
                method: "POST",
                headers: {
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    user
                })
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = (await response.json());

            // console.log("result is: ", JSON.stringify(result, null, 4));

            this.currentUser = null as any;

        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
            } else {
                console.log('unexpected error: ', error);
            }
        }
    }

    get currentUser(): User {
        return this._currentUser;
    }
    set currentUser(currentUser: User) {
        this._currentUser = currentUser;
    }
}

