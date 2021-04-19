import React, {useContext, useEffect, useState} from "react";
import {LanguageContext} from "../../../contexts/LanguageContext";
import {Profile} from "@maya259/numerology-engine";
import {Box, Card, CardContent, Typography} from "@material-ui/core";
import RemoteContent from "../../../models/remoteContent/remoteContent";
import categories from "../../../models/remoteContent/categories";
import {UserContext} from "../../../contexts/UserContext";

interface PromiseValue {
    letter: string,
    data: string
}

const NameLetters = ({profile}: { profile: Profile }) => {
    const {getWord, currentLanguage} = useContext(LanguageContext);
    const {user} = useContext(UserContext);
    const [lettersContent, setLettersContent] = useState<{ [key: string]: string }>({});

    const {letters} = profile;

    useEffect(() => {
        const lettersContents = new RemoteContent({category: categories.lettersContents, user});

        const promises = letters.map(letter => {
            return new Promise(async (resolve, reject) => {
                const data = await lettersContents.retrieve(letter + "");
                resolve({letter, data: data ? data.data[currentLanguage] : ""})
            }) as Promise<PromiseValue>;
        });

        Promise.all(promises).then(values => {
            const data = values.reduce((total, currentValue, currentIndex) => {
                return {...total, [currentValue.letter]: currentValue.data}
            }, {} as { [key: string]: string });
            setLettersContent(
                data
            )
        }).catch(e => {
            setLettersContent({})
        })
    }, [currentLanguage, letters, user])


    if (!user) {
        return <React.Fragment/>;
    }


    return (
        <Card>
            <CardContent>
                <Box className="NameLetters">
                    <Typography variant="h5">{getWord("your name letters meaning")}</Typography>
                    {letters.map(letter => {
                        return (
                            <Box key={letter} mb={4}>
                                <Box display="flex" alignItems="center">
                                    <Typography variant="h6">{letter}-</Typography>
                                </Box>
                                <Typography>{lettersContent[letter]}</Typography>
                            </Box>
                        );
                    })}
                </Box>
            </CardContent>
        </Card>
    );
}

export default NameLetters;