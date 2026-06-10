import React, { FC } from 'react';
import { CollapseProps } from './collapse.type';

const Collapse: FC<CollapseProps> = ({ title, content }) => {
    return (
        <div className='collapse collapse-arrow border'>
            <input type='radio' name='my-accordion-2' />
            <div className='collapse-title font-semibold'>{title}</div>
            <div className='collapse-content text-sm'>{content}</div>
        </div>
    );
};

export default Collapse;

