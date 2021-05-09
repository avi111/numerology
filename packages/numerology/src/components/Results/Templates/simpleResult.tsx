import React, {useContext, useEffect, useState} from "react";
import {LanguageContext} from "../../../contexts/LanguageContext";
import {UserContext} from "../../../contexts/UserContext";
import {Box, Card, CardContent, Typography} from "@material-ui/core";
import RemoteContent from "../../../models/remoteContent/remoteContent";
import categories from "../../../models/remoteContent/categories";
import Title from "../Title";

interface ISimpleResult {
    value: number | string,
    category: categories,
    primaryText: string,
    secondaryText?: string
}

const SimpleResult = ({value, category, primaryText, secondaryText}: ISimpleResult) => {
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
                <Box className="SimpleResult">
                    <Box mb={4}>
                        <Title
                            title={`${getWord(primaryText)}${secondaryText && ` - ${getWord(secondaryText)}`} - ${value}:}`}/>
                        <Typography>{content}</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default SimpleResult;