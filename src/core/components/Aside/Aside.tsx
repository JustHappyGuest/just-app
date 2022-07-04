import { memo } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Menu, { MenuItem } from 'atoms/Menu';
import { Title, Subtitle } from 'atoms/Typography';
import Logo from 'core/components/Logo';
import TimeIcon from 'icons/time.svg';
import AvaImage from 'images/ava.jpg';

import styles from './styles.module.scss';

const Aside = () => (
    <div className={styles.container}>
        <div className={styles.inner}>
            <Logo className={styles.logo} />
            <div className={styles.personCard}>
                <Image className={styles.image} src={AvaImage} alt="Leader Avatar" />
                <Title level={5} className={styles.personCardTitle}>
                    Just Tema
                </Title>
                <Subtitle className={styles.personCardSubtitle}>Owner & Founder</Subtitle>
            </div>
            <Menu className={styles.menu}>
                <MenuItem icon={TimeIcon}>
                    <Link href="/just-chat/">Just Chat</Link>
                </MenuItem>
            </Menu>
        </div>
    </div>
);

Aside.displayName = 'Aside';

export default memo(Aside);
