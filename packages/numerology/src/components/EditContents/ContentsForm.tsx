import React, {useContext, useEffect, useState} from "react";
import {LanguageContext} from "../../contexts/LanguageContext";
import categories, {ICategoryItem, sets} from "../../models/remoteContent/categories";
import {allLetters, SUFFIX_LETTERS} from "@maya259/numerology-engine";
import {Box, Button, CircularProgress, FormControl, TextField, Typography} from "@material-ui/core";
import RemoteContent from "../../models/remoteContent/remoteContent";
import {UserContext} from "../../contexts/UserContext";
import _difference from "lodash/difference";

const getElements = (set: sets) => {
    switch (set) {
        case sets.numbers:
            return "012345678".split('')
        case sets.letters:
            const diff = _difference(allLetters, SUFFIX_LETTERS)
            console.log(diff, allLetters, SUFFIX_LETTERS);
            return diff;
        default:
            return [];
    }
}

const ContentsForm = ({category}: { category: ICategoryItem }) => {
    const {user} = useContext(UserContext);
    const [value, setValue] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState(false);
    const {getWord, currentLanguage} = useContext(LanguageContext);

    useEffect(() => {
        const savedContents = new RemoteContent({category: categories[category.key], user});

        savedContents.retrieveAll().then(data => {
            const contents = data
                .reduce((total, currentValue, currentIndex, arr) => {
                    total[currentValue.key] = currentValue.data[currentLanguage];
                    return total;
                }, {} as { [key: string]: string });

            setValue(contents);
        })
    }, [currentLanguage, user, category.key])

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        await update(value);
        setLoading(false);
    }

    const update = async (value: { [key: string]: string }) => {
        const savedContents = new RemoteContent({category: categories[category.key], user});
        const date = new Date(Date.now());
        await savedContents.update(value, date);
    };

    return (
        <form {...{onSubmit}}>
            <Typography variant="h5">{getWord(category.name)}</Typography>
            {loading && <CircularProgress/>}
            {!loading && getElements(category.set).map((element, i) => {
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