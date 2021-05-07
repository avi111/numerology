import React, {useContext, useEffect, useState} from 'react';
import {LanguageContext} from "../../../contexts/LanguageContext";
import {Box, Card, CardContent, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Profile} from "@maya259/numerology-engine";
import {grey} from "@material-ui/core/colors";
import RemoteContent from "../../../models/remoteContent/remoteContent";
import {UserContext} from "../../../contexts/UserContext";
import categories from "../../../models/remoteContent/categories";
import {Report} from "../Report";
import {dictionaryKeys} from "../../../consts/dictionary";
import {Avatar} from "../Avatar";

export enum DateTypes {
    GREGORIAN = 'gregorian',
    HEBREW = 'hebrew'
}

export type Props = {
    profile: Profile,
    date: DateTypes,
    showWhenNull?: boolean
}

const useStyles = makeStyles(theme => ({
    root: {
        fontWeight: 'bold',
        textDecoration: 'underline',
    },
    number: {
        backgroundColor: "transparent",
        color: theme.palette.getContrastText(grey[500]),
        fontSize: 14
    },
    destiny: {
        border: "1px solid red",
    }
}));

function BirthDate({profile, date = DateTypes.GREGORIAN, showWhenNull = false}: Props) {
    const classes = useStyles();
    const langContext = useContext(LanguageContext);
    const {user} = useContext(UserContext);
    const {getWord} = langContext;
    const [birthYearContent, setBirthYearContent] = useState<string>("");
    const [destinyContent, setDestinyContent] = useState<string>("");
    const [birthDayContent, setBirthDayContent] = useState<string>("");


    const triangle = date === DateTypes.GREGORIAN ? profile.triangle : profile.triangleHeb;
    const dateType = date === DateTypes.GREGORIAN ? '' : 'hebrew date';

    useEffect(() => {
        const {birthDay, birthYear, destiny} = triangle || {};

        const birthYearContents = new RemoteContent({category: categories.birthYear, user});
        const destinyContents = new RemoteContent({category: categories.destiny, user});
        const birthDayContents = new RemoteContent({category: categories.birthYear, user});

        birthYearContents.retrieve(birthYear + "").then(data => {
            data && setBirthYearContent(data.data[langContext.currentLanguage as string]);
        })

        destinyContents.retrieve(destiny + "").then(data => {
            data && setDestinyContent(data.data[langContext.currentLanguage as string]);
        })

        birthDayContents.retrieve(birthDay + "").then(data => {
            data && setBirthDayContent(data.data[langContext.currentLanguage as string]);
        })
    }, [langContext.currentLanguage, triangle, user])

    if (!user) {
        return <React.Fragment/>
    }

    if (showWhenNull && !triangle) {
        return (
            <Report {...{
                classes: {root: classes.root},
                word: 'your birth date numbers',
                value: dateType && ` (${getWord(dateType)})`,
                content: 'no data'
            }}/>
        )
    }

    if (!triangle) {
        return <React.Fragment/>
    }

    const {birthDay, birthMonth, birthYear, destiny} = triangle || {};

    return (
        <Card>
            <CardContent>
                <Box className="BirthDate">
                    <Typography variant="h5" classes={{root: classes.root}}>
                        {getWord('your birth date numbers')}{dateType && ` (${getWord(dateType)})`}:
                    </Typography>
                    <Box display="flex">
                        <Box>{birthDay}</Box>
                        <Box>/</Box>
                        <Box>{birthMonth}</Box>
                        <Box>/</Box>
                        <Box>{birthYear}</Box>
                    </Box>
                    <Box display="flex">
                        {[birthDay, birthMonth, birthYear, "="].map((v,i) =>
                            <Avatar {...{
                                key: i,
                                className: classes.number,
                                value: v as unknown as string
                            }}/>
                        )}
                        <Avatar
                            {...{
                                className: `${classes.number} ${classes.destiny}`,
                                value: destiny as unknown as string
                            }} />
                    </Box>
                </Box>
                <Box>
                    <Report
                        {...{
                            word: dictionaryKeys["birth year"],
                            value: birthYear as unknown as string,
                            content: birthYearContent,
                            classes: {root: classes.root},
                            margin: 0
                        }}
                    />
                    <Report
                        {...{
                            word: dictionaryKeys["destiny"],
                            value: destiny as unknown as string,
                            content: destinyContent,
                            classes: {root: classes.root},
                            margin: 0
                        }}
                    />
                    <Report
                        {...{
                            word: dictionaryKeys["birth day"],
                            value: birthDay as unknown as string,
                            content: birthDayContent,
                            classes: {root: classes.root},
                            margin: 0
                        }}
                    />
                </Box>
            </CardContent>
        </Card>
    );
}

export default BirthDate;