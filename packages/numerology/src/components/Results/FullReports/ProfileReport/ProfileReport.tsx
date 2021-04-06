import {Profile} from '../../../../numerologyEngine';
import React from 'react';
import {Box} from "@material-ui/core";
import Triangle from "../../Traingale/Traingle";
import Title from "../../Title/Title";
import BirthDate from "../../BirthDate/BirthDate";
import {language} from "../../../../contexts/LanguageContext";

type Props = { profile: Profile }

const ProfileReport = ({profile}: Props) => {
    const {triangle, triangleHeb} = profile;
    return (
        <Box className="ProfileReport">
            <Box>
                <Title profile={profile}/>
            </Box>
            <Box>
                <Triangle triangle={triangle} width={200} hebrewDate={false}/>
                {triangleHeb && (<Triangle triangle={triangleHeb} width={200} hebrewDate={true}/>)}
            </Box>
            <Box>
                <BirthDate profile={profile} lang={language.ENGLISH}/>
            </Box>
            <Box>
                <BirthDate profile={profile} lang={language.HEBREW}/>
            </Box>
        </Box>
    );
}

export default ProfileReport;