import { FC, memo, ReactNode } from 'react';

import styles from './styles.module.scss';

interface IProps {
    children: ReactNode;
}

const Tabs: FC<IProps> = ({ children }) => <div className={styles.container}>{children}</div>;

export default memo(Tabs);
