import React, {useContext} from "react";
import {LanguageContext} from "../../../contexts/LanguageContext";
import {Box, Card, CardContent} from "@material-ui/core";
import Title from "../Title";
import {dictionaryKeys} from "../../../consts/dictionary";
import {Profile, Square as sq} from "@maya259/numerology-engine";
import Square from "../Square";

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
        triangle: {hilltop}
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
                            <Box>
                                <Box mb={4}>
                                    <Title
                                        title={`${getWord('hard numbers')} - ${hard}, ${getWord('light numbers')} - ${light}`}/>
                                </Box>
                                <Box mb={4}>
                                    <Title
                                        title={`${getWord('number of rows in the matrix')} - ${rows}`}/>
                                </Box>
                                <Box mb={4}>
                                    <Title
                                        title={`${getWord('is first name on a hilltop')} - ${getWord(hilltop ? 'yes' : 'no')}`}/>
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