import {Profile} from '../../../../numerologyEngine';
import React from 'react';
import {Box} from "@material-ui/core";
import Triangle from "../../Traingale/Traingle";

type Props = { profile: Profile }

export default function ProfileReport({profile}: Props) {
    const {triangle, triangleHeb} = profile;
    return (
        <Box className="ProfileReport">
            <Triangle triangle={triangle} width={200} hebrewDate={false} />
            {triangleHeb && <Triangle triangle={triangleHeb} width={200} hebrewDate={true} />}
        </Box>
    );
}