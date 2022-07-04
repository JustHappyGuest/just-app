import { FC, memo, ReactNode } from 'react';

import cn from 'classnames';

import { ICustomTag } from 'core/interfaces/common';
import flexStyles from 'core/styles/flex.module.scss';

interface IProps extends ICustomTag {
    grow?: number;
    shrink?: 1 | 0;
    basis?: number;
    className?: string;
    children?: ReactNode;
}

const FlexItem: FC<IProps> = ({ tag = 'div', grow, className, children, shrink, basis }) => {
    const Tag = tag;

    return (
        <Tag
            className={cn(className, {
                [flexStyles[`grow-${grow}`]]: grow,
                [flexStyles[`basis-${basis}`]]: basis,
                [flexStyles.shrink]: shrink === 1,
                [flexStyles[`shrink-${0}`]]: shrink === 0,
            })}>
            {children}
        </Tag>
    );
};

FlexItem.displayName = 'FlexItem';

export default memo(FlexItem);
