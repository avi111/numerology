import React, {useContext, useState} from 'react';
import {LanguageContext} from "../../../contexts/LanguageContext";
import {Avatar, Box, Card, CardContent, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Profile} from "@maya259/numerology-engine";
import {grey} from "@material-ui/core/colors";
import RemoteContent from "../../../models/remoteContent/remoteContent";
import {UserContext} from "../../../contexts/UserContext";
import categories from "../../../models/remoteContent/categories";

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


    if (!user) {
        return <React.Fragment />;
    }

    const birthYearContents = new RemoteContent({category: categories.birthYear, user});
    const destinyContents = new RemoteContent({category: categories.destiny, user});
    const birthDayContents = new RemoteContent({category: categories.birthYear, user});
    const triangle = date === DateTypes.GREGORIAN ? profile.triangle : profile.triangleHeb;
    const dateType = date === DateTypes.GREGORIAN ? '' : 'hebrew date';
    const {birthDay, birthMonth, birthYear, destiny} = triangle || {};

    birthYearContents.retrieve(birthYear+"").then(data=>{
        console.log({data}, langContext.currentLanguage, data?.data);
        data && setBirthYearContent(data.data[langContext.currentLanguage as string]);
    })

    destinyContents.retrieve(destiny+"").then(data=>{
        console.log({data}, langContext.currentLanguage, data?.data);
        data && setDestinyContent(data.data[langContext.currentLanguage as string]);
    })

    birthDayContents.retrieve(birthDay+"").then(data=>{
        console.log({data}, langContext.currentLanguage, data?.data);
        data && setBirthDayContent(data.data[langContext.currentLanguage as string]);
    })

    if (!user) {
        return <React.Fragment/>
    }


    if (showWhenNull && !triangle) {
        return (
            <Card>
                <CardContent>
                    <Box className="BirthDate">
                        <Typography variant="h5" classes={{root: classes.root}}>
                            {getWord('your birth date numbers')}{dateType && ` (${getWord(dateType)})`}:
                        </Typography>
                        <Typography>{getWord('no data')}</Typography>
                    </Box>
                </CardContent>
            </Card>)
    }

    if (!triangle) {
        return <React.Fragment/>
    }

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
                        <Box><Avatar className={classes.number}>{birthDay}</Avatar></Box>
                        <Box><Avatar className={classes.number}>{birthMonth}</Avatar></Box>
                        <Box><Avatar className={classes.number}>{birthYear}</Avatar></Box>
                        <Box><Avatar className={classes.number}> = </Avatar></Box>
                        <Box><Avatar className={`${classes.number} ${classes.destiny}`}>{destiny}</Avatar></Box>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <Typography variant="h6" classes={{root: classes.root}}>{getWord('birth year')} - {birthYear}</Typography>
                        <Typography>{birthYearContent}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" classes={{root: classes.root}}>{getWord('destiny')} - {destiny}</Typography>
                        <Typography>{destinyContent}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" classes={{root: classes.root}}>{getWord('birth day')} - {birthDay}</Typography>
                        <Typography>{birthDayContent}</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default BirthDate;