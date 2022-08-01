import React from 'react';
import { SelectIcon } from 'components/SelectIcon';

const InformationItem = ({ icon }) => {
  return (
    <div className='flex justify-center md:px-3'>
      <div className='flex flex-col xl:p-1 max-h-[120px] md:max-h-[100px] md:w-full items-center md:items-start bg-[#c0e4cb] rounded-2xl p-1 px-4 border-2 border-gray-800 ...'>
        <div className='flex flex-col md:flex-row items-center md:gap-7 xl:gap-4 md:min-h-[80px] xl:min-h-[50px]'>
          <SelectIcon iconName={icon} />
        </div>
      </div>
    </div>
  );
};

export { InformationItem };
