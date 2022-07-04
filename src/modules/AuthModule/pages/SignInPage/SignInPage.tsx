import { memo } from 'react';

import Button, { ButtonModifier } from 'atoms/Button';
import Input from 'atoms/Input';
import { Paragraph, Subtitle, Title } from 'atoms/Typography';
import Logo from 'core/components/Logo';
import { ISize } from 'core/interfaces/common';
import marginStyles from 'core/styles/margin.module.scss';

import styles from './styles.module.scss';

const SignInPage = () => (
    <div className={styles.container}>
        <Logo size={ISize.SMALL} />
        <div className={styles.form}>
            <Title level={2}>Let’s Sign You In</Title>
            <Subtitle>Welcome back, you’ve been missed!</Subtitle>
            <Input className={marginStyles['mt-10']} placeholder="Login" />
            <Input className={marginStyles['mt-4']} placeholder="Password" />
            <Button className={marginStyles['mt-10']} modifier={ButtonModifier.PRIMARY} fluid>
                Login
            </Button>
        </div>
        <Paragraph className={marginStyles['mt-4']} level={3}>
            Don't have an account ? Fuck off
        </Paragraph>
    </div>
);

SignInPage.displayName = 'SignInPage';

export default memo(SignInPage);
