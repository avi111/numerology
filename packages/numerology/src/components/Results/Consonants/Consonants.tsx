import React from "react";
import {Profile} from "@maya259/numerology-engine";
import categories from "../../../models/remoteContent/categories";
import SimpleResult from "../Templates/simpleResult";
import {dictionaryKeys} from "../../../consts/dictionary";

const Consonants = ({profile}: { profile: Profile }) => {
    return <SimpleResult {...
        {
            value: profile.name.itzurim,
            category: categories.consonants,
            primaryText: dictionaryKeys["meaning of consonant letters in your name"],
            secondaryText: dictionaryKeys["how others see you"]
        }} />
}

export default Consonants;