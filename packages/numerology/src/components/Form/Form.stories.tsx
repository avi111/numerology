import React from 'react';
import { Story } from '@storybook/react';

import Form, {FormProps, forms} from './index';

export default {
  title: 'Body/Form',
  component: Form
};


const Template: Story<FormProps> = (args) => <Form {...args} />;

export const Profile = Template.bind({});

Profile.args = {
  form: forms.PROFILE
}