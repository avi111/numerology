import React, {useContext} from "react";
import {LanguageContext} from "../../../contexts/LanguageContext";
import {Box, Card, CardContent} from "@material-ui/core";
import Title from "../Title";
import {dictionaryKeys} from "../../../consts/dictionary";
import {Profile, Square as sq} from "@maya259/numerology-engine";
import Square from "../Square";
import SimpleResult from "../Templates/simpleResult";
import categories, {getBoolean} from "../../../models/remoteContent/categories";

const MatchNameBirth = ({profile}: { profile: Profile }) => {
    const {getWord} = useContext(LanguageContext);

    const {
        matchNameBirth: {
            square,
            actualSquare,
            hard,
            rows,
            light
        },
        triangle: {hilltop, firstName}
    } = profile;

    const chunk = (square: number[]) => {
        return sq.fillSquare(square, square);
    }

    return (
        <React.Fragment>
            <Card>
                <CardContent>
                    <Box className="SimpleResults">
                        <Box mb={4}>
                            <Title
                                title={`${getWord(dictionaryKeys["match between name and birth date"])}:`}/>
                            <Box>
                                <Square {...{master: chunk(square), square: actualSquare}} />
                            </Box>
                            <Box component="ol">
                                <Box mb={4} component="li">
                                    <SimpleResult {...{
                                        value: `${hard}-${light}`,
                                        category: categories.hardLightNumbers,
                                        primaryText: getWord("you have xxx hard numbers and yyy light numbers").replace("xxx",hard+'').replace('yyy',light+'')+': ',
                                        inline: true,
                                        showValue: false,
                                        card: false
                                    }} />
                                </Box>
                                <Box mb={4} component="li">
                                    <SimpleResult {...{
                                        value: rows,
                                        category: categories.numRows,
                                        primaryText: getWord('number of rows in the matrix')+': ',
                                        inline: true,
                                        showValue: false,
                                        card: false
                                    }} />
                                </Box>
                                <Box mb={4} component="li">
                                    <SimpleResult {...{
                                        value: getBoolean(!!hilltop),
                                        category: categories.isFirstNameAHilltop,
                                        primaryText: getWord('is first name on a hilltop')+': ',
                                        inline: true,
                                        showValue: false,
                                        card: false,
                                        payload: str => str.replace('xxx', firstName+'')
                                    }} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </React.Fragment>
    );
}

export default MatchNameBirth;