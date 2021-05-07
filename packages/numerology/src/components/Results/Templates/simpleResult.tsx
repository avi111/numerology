import React, {useContext, useEffect, useState} from "react";
import {LanguageContext} from "../../../contexts/LanguageContext";
import {UserContext} from "../../../contexts/UserContext";
import {Box, Card, CardContent, Typography} from "@material-ui/core";
import RemoteContent from "../../../models/remoteContent/remoteContent";
import categories from "../../../models/remoteContent/categories";

interface ISimpleResult {
    value: number | string,
    category: categories,
    primaryText: string
}

const SimpleResult = ({value, category, primaryText}: ISimpleResult) => {
    const {getWord, currentLanguage} = useContext(LanguageContext);
    const {user} = useContext(UserContext);
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        const contents = new RemoteContent({category, user});

        contents.retrieve(value + "").then(data => {
            data && setContent(data.data[currentLanguage as string]);
        })
    });

    return (
        <Card>
            <CardContent>
                <Box className="NameLetters">
                    <Box mb={4}>
                        <Box display="flex" alignItems="center">
                            <Typography
                                variant="h6">{getWord(primaryText)} - {value}:</Typography>
                        </Box>
                        <Typography>{content}</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default SimpleResult;