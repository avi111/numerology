import React from 'react';

import { Button } from "@maya259/components";

export default {
  title: 'UI Components/Buttons',
  component: Button,
};

export const Simple = (({primary}) => <Button {...{primary}}>Click me!</Button>).bind({})
export const Primary = (() => <Button primary>Click me!</Button>).bind({})
export const Secondary = (() => <Button>Click me!</Button>).bind({})

// @ts-ignore
Simple.args = {
  primary: true,
}