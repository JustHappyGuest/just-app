import { FC, memo } from 'react';

import styles from './styles.module.scss';

export interface ITabPaneProps {
    title: string;
}

const TabPane: FC<ITabPaneProps> = ({ title }) => <div className={styles.container}>{title}</div>;

TabPane.displayName = 'TabPane';

export default memo(TabPane);
