import {
  Avatar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { PropsWithChildren } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar } from "./style";
import { images } from "../../assets";

interface PropsType extends PropsWithChildren {
  open: boolean;
  handleDrawerOpen: () => void;
}

const NavBar: React.FC<PropsType> = ({ open, handleDrawerOpen }) => {
  const mediumWidth = useMediaQuery("(min-width:1000px)");
  const xsmall = useMediaQuery("(min-width:650px)");
  const theme = useTheme();
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent="space-between"
          width={"100%"}
        >
          <Stack direction={"row"} spacing={1} alignItems="center">
            <IconButton
              color="primary"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              display={!mediumWidth ? "none" : ""}
              fontWeight="medium"
              color={theme.palette.primary.dark}
              fontSize="1rem"
            >
              أغرس اليوم شجرة تنم في ظلها غداً
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={1} alignItems="center">
            <Avatar
              sx={{ width: 56, height: 56 }}
              alt="user name"
              src={images.profile}
            />
            <Typography
              display={!xsmall ? "none" : ""}
              fontWeight="medium"
              color="#191919"
              fontSize="1rem"
            >
              نواف البشري
            </Typography>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
