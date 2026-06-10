import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import Textarea from './index';

describe('Textarea component', () => {
    it('should type text', async () => {
        render(<Textarea placeholder='Enter text...' />);
        const input = screen.getByRole('textbox');

        await userEvent.type(input, 'hello world');
        expect(input).toHaveValue('hello world');
    });
});
