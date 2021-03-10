import vest, {enforce, test} from "vest";
import {doesUserExist} from "./api";
import validator from "validator";
import {DraftResult, IVestResult} from "vest/vestResult";

interface ICreateResult {
    get: (form?: string) => DraftResult;
    reset: () => void;

    (...args: any[]): IVestResult;
}

const {isEmail} = validator;
enforce.extend({isEmail});

// We import enforceExtended instead of enforce
// bacuse this extended bundle has email validation

const suite: ICreateResult = vest.create("user_form", (data = {}, currentField) => {
    vest.only(currentField);

    test("username", "Username is required", () => {
        enforce(data.username).isNotEmpty();
    });

    test("username", "Username must be at least 3 characterss long", () => {
        enforce(data.username).longerThanOrEquals(3);
    });

    if (!suite.get().hasErrors("username")) {
        test("username", "Username already exists", () => {
            if (data.username) {
                return doesUserExist(data.username);
            }
        });
    }

    test("email", "Email Address is not valid", () => {
        enforce(data.email).isEmail();
    });

    test("password", "Password is weak, Maybe add a number?", () => {
        vest.warn();
        enforce(data.password).matches(/[0-9]/);
    });

    if (data.password) {
        test("confirm_password", "Passwords do not match", () => {
            enforce(data.confirm_password).equals(data.password);
        });
    }

    test("tos", () => {
        enforce(data.tos).isTruthy();
    });
});

export default suite;
