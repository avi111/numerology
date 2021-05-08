import React from "react";
import {Profile} from "@maya259/numerology-engine";
import categories from "../../../models/remoteContent/categories";
import SimpleResult from "../Templates/simpleResult";
import {dictionaryKeys} from "../../../consts/dictionary";

const Ehevi = ({profile}: { profile: Profile }) => {
    return <SimpleResult {...
        {
            value: profile.name.ehevi,
            category: categories.ehevi,
            primaryText: dictionaryKeys["meaning of ehevi letters in your name"],
            secondaryText: dictionaryKeys["you soul's desire"]
        }} />
}

export default Ehevi;