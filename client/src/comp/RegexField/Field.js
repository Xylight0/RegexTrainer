import React from 'react';
import Expression from './Expression/Expression';
import TextCheck from './TextCheck/TextCheck';

export default function Field() {
  return <div className='w-full h-full p-8 flex flex-col gap-16'>
      <Expression />
      <TextCheck />
  </div>;
}
