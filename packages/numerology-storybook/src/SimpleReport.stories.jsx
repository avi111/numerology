import React from 'react';

import {Report} from "@maya259/components";

export default {
    title: 'UI Components/Simple Report',
    component: Report,
};

export const Simple = (({
                            content,
                            title,
                            inline
                        }) => <Report.SimpleReport {...{
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