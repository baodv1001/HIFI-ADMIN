import { Avatar, Card, Col, Row, Typography } from 'antd';
import React, { FC } from 'react';
import styles from './index.module.less';
import moment from 'moment';

interface Props {
  // avatar: string;
  message: string;
  date: string;
  isMine: boolean;
}

const ChatItem: FC<Props> = (props) => {
  const { isMine, message, date } = props;

  return (
    <div className={styles.container}>
      <Row
        align="bottom"
        wrap={false}
        className={isMine ? styles['flex-row-reserve'] : ''}
      >
        <Col>
          <Avatar
            src="https://joeschmoe.io/api/v1/random"
            alt="Han Solo"
            size={'large'}
          />
        </Col>
        <Col flex="initial">
          <Card className={styles.bubble}>
            <Row justify={isMine ? 'end' : 'start'}>
              <Typography.Paragraph className={styles.content}>
                {message}
              </Typography.Paragraph>
            </Row>
            <Row>
              <Typography.Text className={styles[`chat-time`]}>
                {moment(date).fromNow()}
              </Typography.Text>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ChatItem;
