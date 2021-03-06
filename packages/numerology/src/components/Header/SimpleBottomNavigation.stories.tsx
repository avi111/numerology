import React from 'react';
import { Story, Meta } from '@storybook/react';
import {MemoryRouter} from 'react-router-dom';
import SimpleBottomNavigation from './SimpleBottomNavigation';

export default {
    title: 'Header/SimpleBottomNavigation',
    component: SimpleBottomNavigation
} as Meta;

export const Primary = () => <MemoryRouter>
    <SimpleBottomNavigation/>
</MemoryRouter>;