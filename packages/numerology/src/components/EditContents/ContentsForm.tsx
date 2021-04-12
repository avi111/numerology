import React, {useContext, useState} from "react";
import {LanguageContext} from "../../contexts/LanguageContext";
import {ICategoryItem, sets} from "../../models/remoteContent/categories";
import {allLetters} from "@maya259/numerology-engine";
import {Box, Button, FormControl, TextField, Typography} from "@material-ui/core";

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
    const {getWord} = useContext(LanguageContext);
    const [value, setValue] = useState<{ [key: string]: string }>({});
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(value);
    }
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