import React, {useContext, useEffect, useState} from "react";
import {LanguageContext} from "../../contexts/LanguageContext";
import categories, {ICategoryItem, sets} from "../../models/remoteContent/categories";
import {allLetters} from "@maya259/numerology-engine";
import {Box, Button, FormControl, TextField, Typography} from "@material-ui/core";
import RemoteContent from "../../models/remoteContent/remoteContent";
import {UserContext} from "../../contexts/UserContext";

const getElements = (set: sets) => {
    switch (set) {
        case sets.numbers:
            return "0123456789".split('')
        case sets.letters:
            return allLetters
        default:
            return [];
    }
}

const ContentsForm = ({category}: { category: ICategoryItem }) => {
    const {user} = useContext(UserContext);
    const [value, setValue] = useState<{ [key: string]: string }>({});
    const {getWord, currentLanguage} = useContext(LanguageContext);

    useEffect(()=>{
        const savedContents = new RemoteContent({category: categories[category.key], user});

        savedContents.retrieveAll().then(data => {
            setValue(data
                .reduce((total, currentValue, currentIndex, arr) => {
                    return {...total, [currentValue.key]: currentValue.data[currentLanguage]};
                }, {}));
        })
    },[currentLanguage, user, category.key])

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await update(value);
    }

    const update = async (value: { [key: string]: string }) => {
        const savedContents = new RemoteContent({category: categories[category.key], user});
        await savedContents.updateLocally(value);
        await savedContents.updateRemotely(value);

    };

    return (
        <form {...{onSubmit}}>
            <Typography variant="h5">{getWord(category.name)}</Typography>
            {getElements(category.set).map((element, i) => {
                const id = `${category.name}-${element}`;
                return (
                    <Box key={i}>
                        <FormControl fullWidth>
                            <Typography variant="h6">{getWord(element)}</Typography>
                            <TextField
                                {...{
                                    variant: "outlined",
                                    fullWidth: true,
                                    multiline: true,
                                    rows: 10,
                                    id,
                                    value: value[element],
                                    onChange: e => setValue({...value, [element]: e.target.value})
                                }}
                            />
                        </FormControl>
                    </Box>
                )
            })}
            <Button type="submit">Save</Button>
        </form>
    );
}

export default ContentsForm;