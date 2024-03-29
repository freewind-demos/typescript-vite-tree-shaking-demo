import React, { FC } from 'react';
import './Hello.pcss';
import { toUpper } from './utils';

type Props = {};

export const Hello: FC<Props> = ({ }) => {
  return <div className={'Hello'}>
    <h1>Hello {toUpper('React')}</h1>
  </div>;
}
