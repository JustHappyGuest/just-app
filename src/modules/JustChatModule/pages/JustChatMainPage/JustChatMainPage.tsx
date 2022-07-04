import { FC } from 'react';

import Image from 'next/image';

import Button, { ButtonModifier } from 'atoms/Button';
import Input, { InputModifier } from 'atoms/Input';
import { FlexItem } from 'atoms/Layout';
import Flex from 'atoms/Layout/Flex/Flex';
import Paper from 'atoms/Paper';
import { Subtitle, Title } from 'atoms/Typography';
import Layout from 'core/components/Layout';
import marginStyles from 'core/styles/margin.module.scss';
import CogIcon from 'icons/cog.svg';
import avatarImage from 'images/defaultAvatars/1.png';
import Message from 'modules/JustChatModule/components/Message';
import UserCard from 'modules/JustChatModule/components/UserCard';

import styles from './styles.module.scss';

const JustChatMainPage: FC = () => (
    <Layout>
        <Flex justifyContent="between" alignItem="center">
            <Title level={2}>Just Chat</Title>
            <Button modifier={ButtonModifier.SECONDARY} icon={<CogIcon />} />
        </Flex>

        <Flex className={marginStyles['mt-4']} gap={4}>
            <FlexItem basis={60}>
                <Paper>
                    <Title className={marginStyles['mb-8']} level={4}>
                        Users
                    </Title>
                    <Flex gap={4} direction="col">
                        <UserCard username="JustHappyGuest" />
                        <UserCard username="JustHappyGuest" />
                        <UserCard username="JustHappyGuest" />
                        <UserCard username="JustHappyGuest" />
                    </Flex>
                </Paper>
            </FlexItem>
            <FlexItem grow={1}>
                <Paper className={marginStyles['mb-4']}>
                    <Flex gap={6} alignItem="center">
                        <Image src={avatarImage} />
                        <div>
                            <Title level={4}>JustHappyGuest</Title>
                            <Subtitle>Online</Subtitle>
                        </div>
                    </Flex>
                </Paper>
                <Paper className={marginStyles['mb-4']}>
                    <div className={styles.board}>
                        <Message>asd</Message>
                        <Message my>asd</Message>
                        <Message my>asd asd asd asd as dsad as ds ad</Message>
                        <Message>asdas das dads ads a sdas d das ads</Message>
                        <Message>asd as dads ads asd a sd</Message>
                        <Message>asdas dasd asd as d</Message>
                        <Message my>asd</Message>
                        <Message my>asd asd asd asd as dsad as ds ad</Message>
                        <Message my>asd</Message>
                        <Message my>asd asd asd asd as dsad as ds ad</Message>
                        <Message my>asd</Message>
                        <Message my>asd asd asd asd as dsad as ds ad</Message>
                        <Message my>asd</Message>
                        <Message my>asd asd asd asd as dsad as ds ad</Message>
                    </div>
                </Paper>
                <Paper className={styles.enter}>
                    <Input placeholder="Type something…" modifier={InputModifier.SECONDARY} />
                </Paper>
            </FlexItem>
        </Flex>
    </Layout>
);

export default JustChatMainPage;
