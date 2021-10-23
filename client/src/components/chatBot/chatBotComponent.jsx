import React, { useState } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { VscChromeClose } from "react-icons/vsc";
import ChatBot from "react-simple-chatbot";
import styled, { ThemeProvider } from "styled-components";

function ChatBotComponent() {
  const [open, setOpen] = useState(false);
  const logoUrl = "/img/logo/logo96.png";
  const theme = {
    themebackground: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "var(--orange-color)",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "var(--orange-color)",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };
  const steps = [
    {
      id: "1",
      message: "Hello !",
      trigger: 2,
    },
    {
      id: "2",
      message: "what's your name ? ",
      trigger: "name",
    },
    {
      id: "name",
      user: true,
      trigger: 4,
    },
    {
      id: "4",
      message: "where are you from ?",
      trigger: "email",
    },
    {
      id: "email",
      user: true,
      trigger: 5,
    },
    {
      id: "5",
      message: "Fin !",
      end: true,
    },
  ];
  //   <ChatBot steps={steps} />
  const headerBot = (
    <div
      style={{
        margin: "auto",
        width: "100%",
        color: "#fff",
        textTransform: "uppercase",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={logoUrl}
        alt=""
        width="30"
        height="30"
        style={{ margin: "auto" }}
      />{" "}
      <span>au79code</span>
    </div>
  );
  return (
    <Container>
      <ThemeProvider
        theme={theme}
        style={{
          position: "fixed",
          bottom: "33px",
          right: "33px",
        }}
      >
        {open && (
          <ChatBotStyling
            steps={steps}
            headerTitle={headerBot}
          />
        )}
        <Button onClick={() => setOpen(!open)}>
          {!open ? (
            <FiMessageSquare className="icon" />
          ) : (
            <VscChromeClose className="icon" />
          )}
        </Button>
      </ThemeProvider>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 33px;
  right: 33px;
  z-index: 999999999;
`;

const ChatBotStyling = styled(ChatBot)`
  background: #fff;
  margin-bottom: 10px;
`;

const Button = styled.div`
  background: var(--orange-color);
  /* position: fixed;
  bottom: 33px;
  right: 33px; */
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  border-radius: 50%;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  & .icon {
    color: #fff;
    font-size: 1.6rem;
    fill: #fff;
  }
`;

export default ChatBotComponent;
