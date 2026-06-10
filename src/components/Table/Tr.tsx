import React from 'react';

const Tr = ({ children }: { children: React.ReactNode }) => {
    return (
        <tbody>
            <tr>{children}</tr>
        </tbody>
    );
};

export default Tr;
