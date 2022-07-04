import { FC, memo } from 'react';

import cn from 'classnames';

import { ITypography } from '../types';
import styles from './styles.module.scss';

interface IProps extends ITypography {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title: FC<IProps> = ({ children, className, level = 1 }) => {
    const tagName = `h${level}`;
    const CustomTag = tagName as keyof JSX.IntrinsicElements;

    return <CustomTag className={cn(styles[tagName], className)}>{children}</CustomTag>;
};

Title.displayName = 'Title';

export default memo(Title);
