import { FC, memo } from 'react';

import cn from 'classnames';

import { ICustomTag } from 'core/interfaces/common';

import { ITypography } from '../types';
import styles from './styles.module.scss';

interface IProps extends ITypography, ICustomTag {
    level?: 1 | 2 | 3;
}

const Title: FC<IProps> = ({ tag = 'p', children, className, level = 1 }) => {
    const tagName = `p${level}`;
    const Tag = tag as keyof JSX.IntrinsicElements;

    return <Tag className={cn(styles[tagName], className)}>{children}</Tag>;
};

Title.displayName = 'Title';

export default memo(Title);
