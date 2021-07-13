import React from 'react';

import {Report} from "@maya259/components";

export default {
  title: 'UI Components/Report',
  component: Report,
};

export const Simple = (({word,value,content, margin}) => <Report {...{
  word,
  value,
  content,
  margin
}}/>).bind({})


// @ts-ignore
Simple.args = {
  word: "string",
  value: "3",
  content: "string",
  margin: 4
}