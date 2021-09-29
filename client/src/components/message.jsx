import React from "react";
import { message, Button, Space } from "antd";

const key = 'updatable';

export const successMessage = (sms, time, duration) => {
  message.loading({ content: "Loading...", key });
  setTimeout(() => {
    message.success({ content: sms, key, duration: duration ? duration : 2, style:{color:"#34860a",backgroundColor:"#fff", zIndex:999999} });
  }, time ? time : 1000 );
};

export const errorMessage = (sms, time, duration) => {
  message.loading({ content: "Loading...", key });
  setTimeout(() => {
    message.error({ content: sms, key, duration: duration ? duration : 2 , style:{color:"red", backgroundColor:"#fff", zIndex:999999} });
  }, time ? time : 1000);
};

// export const errorMessage = (sms) => message.success(sms);

// export const warningMessage = (sms) => message.warning(sms);

export const warningMessage = (sms, time, duration) => {
  message.loading({ content: "Loading...", key });
  setTimeout(() => {
    message.warning({ content: sms, key, duration: duration ? duration : 2, style:{color:"#000",} });
  }, time ? time : 1000);
};