import React from "react";
import {Profile} from "@maya259/numerology-engine";
import categories from "../../../models/remoteContent/categories";
import SimpleResult from "../Templates/simpleResult";
import {dictionaryKeys} from "../../../consts/dictionary";

const NameNumber = ({profile}: { profile: Profile }) => {
    return <SimpleResult {...
        {
            value: profile.name.firstNameValue,
            category: categories.firstNameNumber,
            primaryText: dictionaryKeys["your first name number meaning"]
        }} />
}

export default NameNumber;