import { FC, memo, ReactNode } from 'react';

import cn from 'classnames';

import { ICustomTag } from 'core/interfaces/common';
import flexStyles from 'core/styles/flex.module.scss';
import layoutStyles from 'core/styles/layout.module.scss';
import widthStyles from 'core/styles/width.module.scss';

interface IProps extends ICustomTag {
    children: ReactNode;
    justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
    alignItem?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    direction?: 'row' | 'row-reverse' | 'col' | 'col-reverse';
    wrap?: 'wrap' | 'wrap-reverse' | 'nowrap';
    full?: boolean;
    gap?: number;
    className?: string;
}

const Flex: FC<IProps> = ({
    className,
    children,
    justifyContent,
    full,
    alignItem,
    gap,
    tag = 'div',
    direction,
    wrap,
}) => {
    const Tag = tag;

    return (
        <Tag
            className={cn(className, layoutStyles.flex, {
                [flexStyles[`justify-${justifyContent}`]]: justifyContent,
                [widthStyles['w-full']]: full,
                [flexStyles[`items-${alignItem}`]]: alignItem,
                [flexStyles[`gap-${gap}`]]: gap,
                [flexStyles[`flex-${direction}`]]: direction,
                [flexStyles[`flex-${wrap}`]]: wrap,
            })}>
            {children}
        </Tag>
    );
};

Flex.displayName = 'Flex';

export default memo(Flex);
