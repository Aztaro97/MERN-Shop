import React from "react";
import { message, Button, Space } from "antd";

const key = 'updatable';

export const successMessage = (sms) => {
  message.loading({ content: "Loading...", key });
  setTimeout(() => {
    message.success({ content: sms, key, duration: 2, style:{color:"#429e14"} });
  }, 1000);
};

export const errorMessage = (sms) => {
  message.loading({ content: "Loading...", key });
  setTimeout(() => {
    message.error({ content: sms, key, duration: 2, style:{color:"red"} });
  }, 1000);
};

// export const errorMessage = (sms) => message.success(sms);

// export const warningMessage = (sms) => message.warning(sms);

export const warningMessage = (sms) => {
  message.loading({ content: "Loading...", key });
  setTimeout(() => {
    message.warning({ content: sms, key, duration: 2, style:{color:"#000",} });
  }, 1000);
};