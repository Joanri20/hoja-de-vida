import React from 'react';
import { InformationItem } from 'components/InformationItem';

const BasicInformation = () => {
  return (
    <>
      <InformationItem icon='name' />
      <InformationItem icon='email' />
      <div className='flex flex-row md:flex-col gap-3 xl:gap-1 max-w-full justify-center'>
        <InformationItem icon='linkedin' />
        <InformationItem icon='github' />
      </div>
    </>
  );
};

export { BasicInformation };
