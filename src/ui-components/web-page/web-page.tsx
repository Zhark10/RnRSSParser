import React, { FC } from 'react';
import { WebView } from 'react-native-webview';

interface IWebPageProps {
  uri: string;
}

const WebPage: FC<IWebPageProps> = ({ uri }) => {
  return (
    <WebView style={{ position: "absolute", width: "100%", height: "100%", zIndex: 222 }} source={{ uri }} />
  );
}

export default WebPage;

