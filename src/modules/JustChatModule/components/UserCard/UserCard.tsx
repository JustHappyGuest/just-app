import { FC, memo } from 'react';

import Image from 'next/image';

import { Title } from 'atoms/Typography';
import avatarImage from 'images/defaultAvatars/1.png';

import styles from './styles.module.scss';

interface IProps {
    username: string;
    online?: boolean;
}

const UserCard: FC<IProps> = ({ username, online }) => (
    <div className={styles.container}>
        <Image src={avatarImage} width={32} height={32} />
        <Title className={styles.title} level={6}>
            {username}
        </Title>
        {online && <div className={styles.greenDot} />}
    </div>
);

UserCard.displayName = 'UserCard';

export default memo(UserCard);
