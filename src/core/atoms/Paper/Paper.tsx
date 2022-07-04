import { FC, memo, ReactNode } from 'react';

import cn from 'classnames';

import { ICustomTag } from 'core/interfaces/common';
import baseStyles from 'core/styles/base.module.scss';

import styles from './styles.module.scss';

interface IProps extends ICustomTag {
    className?: string;
    children: ReactNode;
    footer?: ReactNode;
    withoutPadding?: boolean;
    secondary?: boolean;
}

const Paper: FC<IProps> = ({ className, children, footer = null, withoutPadding, secondary = false, tag = 'div' }) => {
    const Tag = tag;

    return (
        <Tag className={cn(styles.container, className, { [styles.secondary]: secondary })}>
            <div
                className={cn(styles.content, {
                    [styles.withoutFooter]: !footer,
                    [baseStyles['p-0']]: withoutPadding,
                })}>
                {children}
            </div>
            {footer && <div className={styles.footer}>{footer}</div>}
        </Tag>
    );
};

Paper.displayName = 'Paper';

export default memo(Paper);
