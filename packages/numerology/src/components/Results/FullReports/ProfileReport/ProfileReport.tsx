import {Profile} from '../../../../numerologyEngine';
import React from 'react';
import {Box} from "@material-ui/core";
import Triangle from "../../Triangle/Triangle";
import Title from "../../Title/Title";
import BirthDate, {DateTypes} from "../../BirthDate/BirthDate";
import NameLetters from "../../NameLetters/NameLetters";

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
                <BirthDate profile={profile} date={DateTypes.GREGORIAN}/>
            </Box>
            <Box>
                <BirthDate profile={profile} date={DateTypes.HEBREW}/>
            </Box>
            <Box>
                <NameLetters profile={profile}/>
            </Box>
        </Box>
    );
}

export default ProfileReport;