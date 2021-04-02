import {Profile} from '../../../../numerologyEngine';
import React from 'react';
import {Box, Card, CardContent} from "@material-ui/core";
import Triangle from "../../Traingale/Traingle";
import Title from "../../Title/Title";

type Props = { profile: Profile }

const ProfileReport = ({profile}: Props)  =>{
    const {triangle, triangleHeb} = profile;
    return (
        <Box className="ProfileReport">
            <Box>
                <Title profile={profile} />
            </Box>
            <Box>
                <Card>
                    <CardContent>
                <Triangle triangle={triangle} width={200} hebrewDate={false}/>
                    </CardContent>
                </Card>
                {triangleHeb && (
                    <Card>
                        <CardContent>
                            <Triangle triangle={triangleHeb} width={200} hebrewDate={true}/>
                        </CardContent>
                    </Card>
                )}
            </Box>
        </Box>
    );
}

export default ProfileReport;