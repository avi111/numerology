import vest, {enforce, test} from "vest";
import {doesUserExist} from "./api";
import validator from "validator";
import {DraftResult, IVestResult} from "vest/vestResult";
import {props} from "@maya259/numerology-engine";

interface ICreateResult {
    get: (form?: string) => DraftResult;
    reset: () => void;

    (...args: any[]): IVestResult;
}

const {isEmail} = validator;
enforce.extend({isEmail});

// We import enforceExtended instead of enforce
// bacuse this extended bundle has email validation

const suite: ICreateResult = vest.create("user_form", (data: Partial<props> = {}, currentField) => {
    vest.only(currentField);

    test("firstName", "Username is required", () => {
        enforce(data.firstName).isNotEmpty();
    });

    test("firstName", "Username must be at least 3 characterss long", () => {
        enforce(data.firstName).longerThanOrEquals(3);
    });

    if (!suite.get().hasErrors("firstName")) {
        test("firstName", "Username already exists", () => {
            if (data.firstName) {
                return doesUserExist(data.firstName);
            }
        });
    }

    test("birthDate", "Date must be in the past", () => {
        enforce(data.birthDate).isNotEmpty();
        data.birthDate && enforce(new Date(data.birthDate).getTime()).lessThan(Date.now());
        data.birthDate && enforce(new Date(data.birthDate).getHours()).lessThan(24);
        data.birthDate && enforce(new Date(data.birthDate).getHours()).greaterThanOrEquals(0);
        data.birthDate && enforce(new Date(data.birthDate).getMinutes()).lessThan(60);
        data.birthDate && enforce(new Date(data.birthDate).getMinutes()).greaterThanOrEquals(0);
        data.birthDate && enforce(new Date(data.birthDate).getSeconds()).lessThan(60);
        data.birthDate && enforce(new Date(data.birthDate).getSeconds()).greaterThanOrEquals(0);
    });
});

export default suite;
