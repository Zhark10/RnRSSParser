import React, { FC } from 'react';
import { Button, Content, Toast } from 'native-base';
import { Text } from 'react-native';
import { RSSResponse } from '../../../redux/modules/rss/types';

interface IMessageProps extends RSSResponse {
    onSourceClick: () => void;
    onDeleteRSS: () => void;
}

const Message: FC<IMessageProps> = ({  }) => (
    <Content padder>
          <Button
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                textStyle: { color: "yellow" },
                buttonText: "Okay"
              })
            }
          >
            <Text>Toast</Text>
          </Button>
        </Content>
);

export default Message;