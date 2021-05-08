import React from "react";
import {Profile} from "@maya259/numerology-engine";
import categories from "../../../models/remoteContent/categories";
import SimpleResult from "../Templates/simpleResult";
import {dictionaryKeys} from "../../../consts/dictionary";

const NameNumberFull = ({profile}: { profile: Profile }) => {
    return <SimpleResult {...
        {
            value: profile.name.fullNameValue,
            category: categories.fullNameNumber,
            primaryText: dictionaryKeys["your full name number meaning"],
            secondaryText: dictionaryKeys["your ambition in life"]
        }} />
}

export default NameNumberFull;