import vest, {enforce, test} from "vest";
import {props, gender} from "@maya259/numerology-engine";
import {ICreateResult} from "../interfaces/ICreateResult";
import profileProps from "../props/profile";

const suite: ICreateResult = vest.create(profileProps.form.id, (data: Partial<props> = {}, currentField) => {
    vest.only(currentField);

    test("firstName", "Username is required", () => {
        enforce(data.firstName).isNotEmpty();
    });

    test("firstName", "Username must be at least 3 characterss long", () => {
        enforce(data.firstName).longerThanOrEquals(3);
    });

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

    test("gender", "gender must be valid", () => {
        data.gender && enforce([gender.FEMALE, gender.MALE].includes(data.gender)).isTruthy();
    })
});

export default suite;
