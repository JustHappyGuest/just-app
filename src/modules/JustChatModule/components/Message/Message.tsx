import { FC, memo } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

interface IProps {
    children: string;
    my?: boolean;
}

const Message: FC<IProps> = ({ children, my }) => (
    <div className={cn(styles.container, { [styles.my]: my })}>{children}</div>
);

Message.displayName = 'Message';

export default memo(Message);
