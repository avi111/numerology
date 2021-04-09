import React from 'react';
import {render, screen} from '@testing-library/react';
import {Typography} from "@material-ui/core";

test('renders learn react link', () => {
    render(
        <Typography>home</Typography>
    );
    const linkElement = screen.getByText(/home/i);
    expect(linkElement).toBeInTheDocument();
});
