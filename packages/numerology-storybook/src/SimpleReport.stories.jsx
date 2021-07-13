import React from 'react';

import {SimpleReport} from "@maya259/components";

export default {
    title: 'UI Components/Simple Report',
    component: SimpleReport,
};

export const Simple = (({
                            content,
                            title,
                            inline
                        }) => <SimpleReport {...{
    content,
    title,
    inline
}}/>).bind({})


// @ts-ignore
Simple.args = {
    title: "title",
    content: "content",
    inline: true
}