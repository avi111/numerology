import React from "react";
import {Profile} from "@maya259/numerology-engine";
import categories from "../../../models/remoteContent/categories";
import SimpleResult from "../Templates/simpleResult";
import {dictionaryKeys} from "../../../consts/dictionary";

const PersonalYearWestern = ({profile}: { profile: Profile }) => {
    return <SimpleResult {...
        {
            value: profile.personalYear.hidden,
            category: categories.PersonalYearHidden,
            primaryText: dictionaryKeys["hidden personal year"]
        }} />
}

export default PersonalYearWestern;