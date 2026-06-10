import React from 'react';
import { TableType } from './table.types';
const Table = ({ headData, children, classname }: TableType) => {
    return (
        <div className={`mx-auto w-full max-w-5xl ${classname}`}>
            <div className='overflow-x-auto rounded-t-3xl border border-[#B9B9B9] rounded-b-lg'>
                <table className='table overflow-hidden rounded-t-3xl'>
                    <thead className='rounded-t-3xl bg-yellow-1'>
                        <tr >
                            {headData.map((data, i) => (
                                <th className='bg-primary text-white text-center first:text-start last:text-end' key={i}>
                                    {data}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    {children}
                </table>
            </div>
        </div>
    );
};

export default Table;
