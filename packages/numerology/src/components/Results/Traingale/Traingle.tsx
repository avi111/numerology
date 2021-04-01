import React, {useContext} from "react";
import {LanguageContext} from "../../../contexts/LanguageContext";
import './triangle.scss';
import {Box, Typography} from "@material-ui/core";
import classNames from "classnames";
import {MainTriangle} from "@maya259/numerology-engine";

const Triangle = ({triangle, width = 200, hebrewDate = false}: { triangle: MainTriangle, width: number, hebrewDate: boolean }) => {
    const langContext = useContext(LanguageContext);
    const {getWord} = langContext;
    return (
        <Box className={classNames({heb: hebrewDate})}>
            <Box>
                <Typography>
                    {getWord('destiny')}: {triangle.destiny}
                </Typography>
                <Typography>
                    {getWord('first name')}: {triangle.firstName}
                </Typography>
                <Typography>
                    {getWord('birth day')}: {triangle.birthDay}
                </Typography>
            </Box>
            <div className="triangle-container" style={{width}}>
                <svg viewBox={`0 0 ${width} ${width}`}>
                    <polygon className="triangle" points={
                        `${width/2} 0, ${width} ${width}, 0 ${width}`
                    }/>
                    Sorry, your browser does not support inline SVG.
                </svg>
                <div className="vertex1">
                    {triangle.destiny}
                </div>
                <div className="vertex2">
                    {triangle.birthDay}
                </div>
                <div className="vertex3">
                    {triangle.firstName}
                </div>
            </div>
        </Box>
    )
}

export default Triangle;