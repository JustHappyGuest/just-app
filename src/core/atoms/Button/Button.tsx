import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';
import { ButtonModifier } from './types';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    modifier?: ButtonModifier;
    icon?: ReactNode;
    fluid?: boolean;
}

const Button: FC<IProps> = ({
    children,
    icon,
    onClick,
    className,
    modifier = ButtonModifier.PRIMARY,
    type = 'button',
    fluid = false,
}) => (
    <button
        onClick={onClick}
        className={cn(styles.button, styles[modifier], className, { [styles.fluid]: fluid })}
        type={type}>
        {icon && icon}
        {children}
    </button>
);

Button.displayName = 'Button';

export default memo(Button);
