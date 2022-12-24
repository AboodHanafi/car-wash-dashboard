import {
  Avatar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
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
            <Typography fontWeight="bold" color={theme.palette.primary.dark}>
              أغرس اليوم شجرة تنم في ظلها غداً
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={1} alignItems="center">
            <Avatar
              sx={{ width: 56, height: 56 }}
              alt="user name"
              src={images.profile}
            />
            <Typography fontWeight="medium" color="#191919">
              نواف البشري
            </Typography>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
