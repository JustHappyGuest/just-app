import { FC, memo, ReactNode } from 'react';

import styles from './styles.module.scss';

export interface IMenuItemProps {
    children: ReactNode;
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const MenuItem: FC<IMenuItemProps> = ({ children, icon }) => {
    const Icon = icon;

    return (
        <li className={styles.container}>
            {Icon && <Icon className={styles.icon} />}
            {children}
        </li>
    );
};

MenuItem.displayName = 'MenuItem';

export default memo(MenuItem);
