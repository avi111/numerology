import React, {useContext} from "react";
import {LanguageContext} from "../../../contexts/LanguageContext";
import {Box} from "@material-ui/core";
import Title from "../Title";
import {dictionaryKeys} from "../../../consts/dictionary";
import {Profile} from "@maya259/numerology-engine";
import SimpleResult, {wrapWithCard} from "../Templates/simpleResult";
import categories from "../../../models/remoteContent/categories";

const MissingNumbers = ({profile}: { profile: Profile }) => {
    const {getWord} = useContext(LanguageContext);

    const {
        missingNumbers: {
            missing
        }
    } = profile;

    return wrapWithCard(
        <React.Fragment>
            <Title
                title={`${getWord(dictionaryKeys["missing numbers in your full name"])}: ${missing.join(" ")}`}/>
            <Box>
                {missing.map((num: number, i: number) => <Box mb={4}>
                    <SimpleResult {...{
                        key: i,
                        value: `${num}`,
                        category: categories.missingNumbers,
                        primaryText: num + ' - ',
                        inline: true,
                        showValue: false,
                        card: false
                    }} />
                </Box>)}
            </Box>
        </React.Fragment>
    )
}

export default MissingNumbers;