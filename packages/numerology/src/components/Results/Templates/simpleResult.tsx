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
    secondaryText?: string,
    showValue?: boolean,
    inline?: boolean,
    card?: boolean,
    payload?: (datum: string) => string
}

export const wrapWithCard = (content: JSX.Element | string) => (
    <Card>
        <CardContent>
            {content}
        </CardContent>
    </Card>
)

const SimpleResult = ({
                          value,
                          category,
                          primaryText,
                          secondaryText,
                          showValue = true,
                          inline = false,
                          card = true,
                          payload
                      }: ISimpleResult) => {
    const {getWord, currentLanguage} = useContext(LanguageContext);
    const {user} = useContext(UserContext);
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        const contents = new RemoteContent({category, user});

        contents.retrieve(value + "").then(data => {
            if(payload){
                data && setContent(payload(data.data[currentLanguage as string]));
            } else {
                data && setContent(data.data[currentLanguage as string]);
            }
        })
    });

    const title = `${getWord(primaryText)}${secondaryText ? ` - ${getWord(secondaryText)}` : ''}${showValue ? `- ${value}:` : ''}`;

    const cardContent = (
        <Box className="SimpleResult">
            <Box mb={4} display={inline ? "inline" : undefined}>
                {(primaryText || secondaryText) && <Title
                    {...{
                        title,
                        inline
                    }}
                />}
                {content && <Typography component={inline ? "span" : "p"}>{content}</Typography>}
            </Box>
        </Box>
    );

    return card ? wrapWithCard(cardContent) : cardContent;
}

export default SimpleResult;