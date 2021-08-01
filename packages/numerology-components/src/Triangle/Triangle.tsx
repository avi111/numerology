import * as React from "react";
import classNames from "classnames";
import {Box, Card, CardContent, Typography} from "@material-ui/core";
import {MainTriangle} from "@maya259/numerology-engine";

export interface ITriangle {
    triangle: MainTriangle;
    width: number;
    hebrewDate: boolean;
    words: {
        destiny: string;
        firstName: string;
        birthDay: string;
    }
}

const Triangle: React.FC<ITriangle> = ({
                                           triangle,
                                           width,
                                           hebrewDate,
                                           words
                                       }) => {
    return (
        <Card>
            <CardContent>
                <Box className={classNames({heb: hebrewDate})}>
                    <Box>
                        <Typography>
                            {words.destiny}: {triangle.destiny}
                        </Typography>
                        <Typography>
                            {words.firstName}: {triangle.firstName}
                        </Typography>
                        <Typography>
                            {words.birthDay}: {triangle.birthDay}
                        </Typography>
                    </Box>
                    <div style={{
                        width,
                        position: "relative",
                        margin: "auto",
                        textAlign: "center",
                        border: "1px solid white"
                    }}>
                        <span style={{fontSize: width, color: hebrewDate ? 'blue' : 'red'}}>&#9650;</span>
                        <div style={{
                            top: -20,
                            width: "100%",
                            textAlign: "center",
                            position: "absolute",
                            fontSize: 24,
                            textShadow: "2px 2px 2px rgba(150, 150, 150, 0.3)"
                        }}>
                            {triangle.destiny}
                        </div>
                        <div style={{
                            right: -10,
                            bottom: 0,
                            position: "absolute",
                            fontSize: 24,
                            textShadow: "2px 2px 2px rgba(150, 150, 150, 0.3)"
                        }}>
                            {triangle.birthDay}
                        </div>
                        <div style={{
                            left: -10,
                            bottom: 0,
                            position: "absolute",
                            fontSize: 24,
                            textShadow: "2px 2px 2px rgba(150, 150, 150, 0.3)"
                        }}>
                            {triangle.firstName}
                        </div>
                    </div>
                </Box>
            </CardContent>
        </Card>
    )
}

export default Triangle;