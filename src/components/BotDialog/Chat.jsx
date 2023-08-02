import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import PropTypes from "prop-types";
import BotImage from "../../assets/bot.png";
import UserImage from "../../assets/user.png";

const commonStyles = {
  display: "flex",
  alignItems: "center",
  "& .MuiListItem-root": {
    width: "100%",
  },
};

const Chat = ({ chat, isLoading }) => {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        padding: 0,
        // overflow: "auto",
      }}
    >
      {chat.map((message, i) => {
        return (
          <ListItem
            sx={
              message.type === "bot"
                ? {
                    backgroundColor: "#f5f5f5",
                    borderTop: "1px solid #55555563",
                    borderBottom: "1px solid #55555563",
                    ...commonStyles,
                    "& .MuiListItemText-primary": {
                      color: "#444444 !important",
                    },
                  }
                : {
                    backgroundColor: "#fff",
                    ...commonStyles,
                    "& .MuiListItemText-primary": {
                      fontWeight: 600,
                    },
                  }
            }
            key={`${message.type}_${i + 1}`}
            alignItems="flex-start"
          >
            <ListItemAvatar>
              <Avatar
                sx={{ width: 35, height: 35 }}
                alt={message.type}
                src={message.type === "bot" ? BotImage : UserImage}
              />
            </ListItemAvatar>
            <ListItemText
              sx={{
                width: "100%",
              }}
              primary={message.message}
            />
          </ListItem>
        );
      })}
      {isLoading && (
        <ListItem
          sx={{
            backgroundColor: "#f5f5f5",
            borderTop: "1px solid #55555563",
            borderBottom: "1px solid #55555563",
            ...commonStyles,
            "& .MuiListItemText-primary": {
              color: "#444444 !important",
            },
          }}
          alignItems="flex-start"
        >
          <ListItemAvatar>
            <Avatar sx={{ width: 35, height: 35 }} alt={"bot"} src={BotImage} />
          </ListItemAvatar>
          <ListItemText primary={"Generating answer..."} />
        </ListItem>
      )}
    </List>
  );
};

Chat.propTypes = {
  chat: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Chat;
