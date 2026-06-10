import React from 'react';

const TCell = ({ children }: { children: React.ReactNode }) => {
    return <td className='font-semibold whitespace-nowrap first:text-start text-center last:text-end'>{children}</td>;
};

export default TCell;

