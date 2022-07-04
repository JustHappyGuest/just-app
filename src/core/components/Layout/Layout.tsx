import { FC, ReactNode } from 'react';

import Paper from 'atoms/Paper';
import Aside from 'core/components/Aside';

import styles from './styles.module.scss';

interface IProps {
    children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => (
    <div className={styles.container}>
        <Aside />
        <div className={styles.inner}>{children}</div>
        <Paper className={styles.notifications}>Бумажка</Paper>
    </div>
);

export default Layout;
