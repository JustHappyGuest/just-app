import { FC, memo } from 'react';

import cn from 'classnames';

import { ITypography } from '../types';
import styles from './styles.module.scss';

interface IProps extends ITypography {
    bold?: boolean;
}

const Subtitle: FC<IProps> = ({ children, className, bold }) => (
    <p className={cn(styles.subTitle, { [styles.bold]: bold }, className)}>{children}</p>
);

Subtitle.displayName = 'Subtitle';

export default memo(Subtitle);
