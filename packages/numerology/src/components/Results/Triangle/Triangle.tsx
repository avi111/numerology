import React, {useContext} from "react";
import {LanguageContext} from "../../../contexts/LanguageContext";
import './triangle.scss';
import {MainTriangle} from "@maya259/numerology-engine";
import {Triangle as TTriangle} from "@maya259/components";

const Triangle = ({
                      triangle,
                      width = 200,
                      hebrewDate = false
                  }: { triangle: MainTriangle, width: number, hebrewDate: boolean }) => {
    const langContext = useContext(LanguageContext);
    const {getWord} = langContext;
    return (
        <TTriangle {...{
            triangle,
            width,
            hebrewDate,
            words: {
                destiny: getWord('destiny'),
                firstName: getWord('first name'),
                birthDay: getWord('birth day')
            }
        }}/>
    )
}

export default Triangle;