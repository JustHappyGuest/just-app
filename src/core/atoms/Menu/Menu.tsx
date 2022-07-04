import { FC, memo, ReactNode } from 'react';

interface IProps {
    children: ReactNode;
    className?: string;
}

const Menu: FC<IProps> = ({ children, className }) => (
    <nav className={className}>
        <ul>{children}</ul>
    </nav>
);

Menu.displayName = 'Menu';

export default memo(Menu);
