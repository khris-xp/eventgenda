"use client";

import { ProfileAvatarURLs } from "@/enums/profile.enum";
import { useAuth } from "@/hooks/useAuth";
import { useAuthStore } from "@/stores/auth.store";
import { MonetizationOn, Person, Stars } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

const NAVIGATION_ITEMS = ["Events", "Blogs", "Rewards"] as const;
const USER_MENU_ITEMS = ["Profile", "Add Coin", "Dashboard", "Logout"] as const;
const ADMIN_MENU_ITEMS = [
  "Profile",
  "Add Coin",
  "Dashboard",
  "Logout",
] as const;
const USER_ONLY_MENU_ITEMS = ["Profile", "Add Coin", "Logout"] as const;
const DASHBOARD_MENU_ITEMS = [
  "Organization",
  "Event Manager",
  "Analytics",
  "Settings",
] as const;

type UserMenuAction = (typeof USER_MENU_ITEMS)[number];
type DashboardMenuAction =
  | "Organization"
  | "Event Manager"
  | "Analytics"
  | "Settings";

const UserMenuContent = ({ userProfile }: { userProfile: any }) => (
  <>
    <Typography className="font-bold px-4">
      {userProfile?.data.fullName}
    </Typography>

    <Box className="p-2">
      <UserMenuRow
        icon={<Person />}
        text={userProfile?.data.role}
        isUpperCase
      />
      <UserMenuRow
        icon={<MonetizationOn />}
        text={`${userProfile?.data.coin} Coins`}
      />
      <UserMenuRow
        icon={<Stars />}
        text={`${userProfile?.data.reward} Rewards`}
      />
      <hr className="my-3" />
    </Box>
  </>
);

const UserMenuRow = ({
  icon,
  text,
  isUpperCase = false,
}: {
  icon: React.ReactNode;
  text: string;
  isUpperCase?: boolean;
}) => (
  <Box className="flex items-center">
    <Box className="m-1">{icon}</Box>
    <Typography
      className={`p-1 ${isUpperCase ? "uppercase font-semibold" : ""}`}
    >
      {text}
    </Typography>
  </Box>
);

const Logo = () => (
  <Link href="/">
    <Box
      component="img"
      src="/img/logo.png"
      alt="Eventgenda Logo"
      sx={{ mr: 2, width: 180, height: "auto", marginLeft: "50px" }}
    />
  </Link>
);

const Navigation = () => (
  <Box
    sx={{
      flexGrow: 1,
      display: { xs: "none", md: "flex" },
      justifyContent: "center",
      gap: "30px",
      marginLeft: "-100px",
    }}
  >
    {NAVIGATION_ITEMS.map((page) => (
      <Button key={page} sx={{ my: 2, color: "black", display: "block" }}>
        <Link href={`/${page.toLowerCase()}`}>
          <Typography>{page}</Typography>
        </Link>
      </Button>
    ))}
  </Box>
);

export default function Header() {
  const { userProfile } = useAuth();
  const { action } = useAuthStore();
  const router = useRouter();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorElDashboard, setAnchorElDashboard] =
    useState<null | HTMLElement>(null);

  const handleDashboardAction = (action: DashboardMenuAction) => {
    const actions: Record<DashboardMenuAction, () => void> = {
      Organization: () => router.push("/dashboard/organization"),
      "Event Manager": () => router.push("/events/dashboard"),
      Analytics: () => router.push("/dashboard/analytics"),
      Settings: () => router.push("/dashboard/settings"),
    };

    actions[action]();
    setAnchorElDashboard(null);
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    const { isConfirmed } = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log out",
      cancelButtonText: "No, cancel",
    });

    if (isConfirmed) {
      action.logout();
      localStorage.setItem("navigateToSignIn", "true");
      window.location.reload();
    }
  };

  const handleMenuAction = (action: UserMenuAction) => {
    const actions: Record<UserMenuAction, () => void> = {
      Logout: handleLogout,
      Profile: () => router.push("/profile"),
      "Add Coin": () => router.push("/payment"),
      Dashboard: () => setAnchorElDashboard(anchorElUser),
    };

    actions[action]();
    setAnchorElUser(null);
  };

  const isAdmin = userProfile?.data.role === "admin";

  return (
    <AppBar
      color="inherit"
      position="fixed"
      className="bg-gray-100 backdrop-blur-sm bg-opacity-70 border border-b-1 shadow-none"
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Logo />
          <Navigation />

          {userProfile ? (
            <Box sx={{ flexGrow: 0, marginRight: "60px" }}>
              <Tooltip title={userProfile?.data.userName}>
                <IconButton onClick={(e) => setAnchorElUser(e.currentTarget)}>
                  <Box
                    component="img"
                    className="rounded-full w-11"
                    src={
                      userProfile?.data.profileImage ||
                      ProfileAvatarURLs.PROFILE
                    }
                    alt="Profile"
                  />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={() => setAnchorElUser(null)}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <UserMenuContent userProfile={userProfile} />
                {(isAdmin ? ADMIN_MENU_ITEMS : USER_ONLY_MENU_ITEMS).map(
                  (item) => (
                    <MenuItem
                      key={item}
                      onClick={() => handleMenuAction(item)}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography>{item}</Typography>
                      {item === "Dashboard" && "▸"}
                    </MenuItem>
                  ),
                )}
              </Menu>
              {isAdmin && (
                <Menu
                  sx={{ mt: "45px", ml: "-10px" }}
                  anchorEl={anchorElDashboard}
                  open={Boolean(anchorElDashboard)}
                  onClose={() => setAnchorElDashboard(null)}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  {DASHBOARD_MENU_ITEMS.map((item) => (
                    <MenuItem
                      key={item}
                      onClick={() => handleDashboardAction(item)}
                    >
                      <Typography>{item}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0, marginRight: "60px" }}>
              <Typography
                variant="h6"
                className="cursor-pointer mr-2 text-[#4329a6]"
                onClick={() => router.push("/sign-in")}
              >
                Sign In
              </Typography>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
