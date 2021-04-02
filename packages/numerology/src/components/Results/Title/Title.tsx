import React, {useContext} from "react";
import {Box, Typography} from "@material-ui/core";
import {LanguageContext} from "../../../contexts/LanguageContext";
import {Profile} from "@maya259/numerology-engine";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        fontWeight: 'bold',
        textDecoration: 'underline'
    },
});

const Title = ({profile}: { profile: Profile }) => {
    const classes = useStyles();
    const langContext = useContext(LanguageContext);
    const {getWord} = langContext;

    return (
        <Box>
            <Typography variant="h4" align="center" classes={{root: classes.root}}>
                {getWord("numerological map")} - {profile.props.firstName}&nbsp;
                {profile.props.familyName}. {getWord("birth date")}:&nbsp;
                {profile.props.birthDate.toLocaleDateString(
                    langContext.currentLanguage.replace('_', '-'),
                    {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric"
                    }
                )}
            </Typography>
        </Box>
    )
}

export default Title;