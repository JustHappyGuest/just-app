import { FC, memo } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';
import { InputModifier } from './types';

interface IProps {
    placeholder?: string;
    className?: string;
    modifier?: InputModifier;
}

const Input: FC<IProps> = ({ placeholder, className, modifier = InputModifier.PRIMARY }) => (
    <input className={cn(styles.input, className, styles[modifier])} placeholder={placeholder} />
);

Input.displayName = 'Input';

export default memo(Input);
