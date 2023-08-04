import { Box, Dialog, IconButton, TextField, Typography } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import PropTypes from "prop-types";
import { useState } from "react";
import Chat from "./Chat";
import { fetchAnswer } from "../../api";
import { EXAMPLES } from "../../utils/dummyData";

const BotDialog = ({ open, handleCloseBot }) => {
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (userMessage) => {
    const question = userMessage || message;
    setMessage("");
    const userObj = {
      type: "user",
      message: question,
    };
    setChat((prev) => [...prev, userObj]);
    setIsLoading(true);
    const answer = await fetchAnswer(question);
    const botObj = {
      type: "bot",
      message: answer,
    };
    setChat((prev) => [...prev, botObj]);
    setIsLoading(false);
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"md"}
      open={open}
      onClose={handleCloseBot}
      aria-labelledby="import-data-form-dialog-title"
      sx={{
        "& .MuiPaper-root": {
          display: "flex",
          alignItems: "center",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "500px",
          "& .chat-item": {
            width: "100%",
          },
        }}
      >
        <Box
          sx={{ height: "85%", overflow: "auto" }}
          className="chat-area chat-item"
        >
          {chat.length > 0 ? (
            <Chat chat={chat} isLoading={isLoading} />
          ) : (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                Chat with your data
              </Typography>
              <Box
                sx={{
                  marginTop: "20px",
                  width: "60%",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                {EXAMPLES.map((example) => (
                  <Box
                    sx={{
                      flex: 1,
                      backgroundColor: "#ececec",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      color: "#464646",
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                      cursor: "pointer",
                    }}
                    key={example.id}
                    onClick={() =>
                      sendMessage(EXAMPLES[example.id - 1].example)
                    }
                  >
                    {example.example}
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>
        <Box
          sx={{
            height: "15%",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            padding: "0 10px",
          }}
          className="text-area chat-item"
        >
          <TextField
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me anything..."
            color="secondary"
            sx={{
              "& .MuiInputBase-input": {
                color: "grey !important",
              },
            }}
            fullWidth
          />
          <IconButton
            disableRipple
            onClick={() => {
              if (isLoading) return;
              sendMessage();
            }}
          >
            <SendRoundedIcon
              color={isLoading ? "secondary" : "primaryButton"}
            />
          </IconButton>
        </Box>
      </Box>
    </Dialog>
  );
};

BotDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleCloseBot: PropTypes.func.isRequired,
};

export default BotDialog;
