import React from "react";
import { message, Button, Space } from "antd";

const key = 'updatable';

export const successMessage = (sms) => {
  message.loading({ content: "Loading...", key });
  setTimeout(() => {
    message.success({ content: sms, key, duration: 2, style:{color:"#09b976"} });
  }, 1000);
};

export const errorMessage = (sms) => message.success(sms);

export const warningMessage = (sms) => message.success(sms);
