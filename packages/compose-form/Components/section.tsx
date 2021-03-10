import React from "react";
import {ISection} from "../interfaces/section";
import Row from './row';

const Section = (section: ISection) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return section.rows.map((row,i) => <Row key={i} fields={row.fields}/>)
}

export default Section;