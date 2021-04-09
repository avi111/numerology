import React, {useContext} from 'react';
import {language, LanguageContext} from "../../../contexts/LanguageContext";
import {Avatar, Box, Card, CardContent, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Profile} from "@maya259/numerology-engine";
import {grey} from "@material-ui/core/colors";

type Props = {
    profile: Profile,
    lang: language.ENGLISH | language.HEBREW,
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

function BirthDate({profile, lang = language.ENGLISH, showWhenNull = false}: Props) {
    const classes = useStyles();
    const langContext = useContext(LanguageContext);
    const {getWord} = langContext;

    const triangle = lang === language.ENGLISH ? profile.triangle : profile.triangleHeb;
    const date = lang === language.ENGLISH ? '' : 'hebrew date';

    if (showWhenNull && !triangle) {
        return (
            <Card>
                <CardContent>
                    <Box className="BirthDate">
                        <Typography variant="h6" classes={{root: classes.root}}>
                            {getWord('your birth date numbers')}{date && ` (${getWord(date)})`}:
                        </Typography>
                        <Typography>{getWord('no data')}</Typography>
                    </Box></CardContent></Card>)
    }
    if (!triangle) {
        return <React.Fragment/>
    }
    const {birthDay, birthMonth, birthYear, destiny} = triangle;

    return (
        <Card>
            <CardContent>
                <Box className="BirthDate">
                    <Typography variant="h6" classes={{root: classes.root}}>
                        {getWord('your birth date numbers')}{date && ` (${getWord(date)})`}:
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
            </CardContent>
        </Card>
    );
}

export default BirthDate;