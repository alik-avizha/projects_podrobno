import React from 'react';
import {UnControlledRating} from './UnControlledReating';
import {action} from '@storybook/addon-actions';

export default {
    title: 'UnControlledRating',
    component: UnControlledRating
}

const callBack = action('rating changed inside component')

export const EmptyRating = () => <UnControlledRating defaultValue={0} onChange={callBack} />;
export const ChangeRating1 = () => <UnControlledRating defaultValue={1} onChange={callBack} />;
export const ChangeRating2 = () => <UnControlledRating defaultValue={2} onChange={callBack} />;
export const ChangeRating3 = () => <UnControlledRating defaultValue={3} onChange={callBack} />;
export const ChangeRating4 = () => <UnControlledRating defaultValue={4} onChange={callBack} />;
export const ChangeRating5 = () => <UnControlledRating defaultValue={5} onChange={callBack} />;



