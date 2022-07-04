import { FC, memo } from 'react';

import cn from 'classnames';

import { Title } from 'atoms/Typography';
import { ISize } from 'core/interfaces/common';
import LogoIcon from 'icons/logo.svg';

import styles from './styles.module.scss';

interface IProps {
    className?: string;
    size?: ISize;
}

const Logo: FC<IProps> = ({ className, size = ISize.MEDIUM }) => (
    <div className={cn(styles.container, className)}>
        <LogoIcon />
        <Title level={size === ISize.SMALL ? 2 : 1}>JustAll</Title>
    </div>
);

Logo.displayName = 'Logo';

export default memo(Logo);
