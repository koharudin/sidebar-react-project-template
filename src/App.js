import "./App.css"
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded"
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded"
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded"
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded"
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded"
import WalletRoundedIcon from "@mui/icons-material/WalletRounded"
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded"
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded"
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded"
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded"
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded"
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded"
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded"
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded"
import { Routes, Route, Link } from "react-router-dom"
import React from "react"
import { Button, Checkbox, FormControlLabel, Input } from "@mui/material"
import ComponentMUI from "./ExamplesMUI/ComponentMUI"

const themes = {
  light: {
    sidebar: {
      backgroundColor: "#ffffff",
      color: "#607489",
    },
    menu: {
      menuContent: "#fbfcfd",
      icon: "#0098e5",
      hover: {
        backgroundColor: "#c5e4ff",
        color: "#44596e",
      },
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7",
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      hover: {
        backgroundColor: "#00458b",
        color: "#b6c8d9",
      },
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
}
export const menuClasses = {
  root: "ps-menu-root",
  menuItemRoot: "ps-menuitem-root",
  subMenuRoot: "ps-submenu-root",
  button: "ps-menu-button",
  prefix: "ps-menu-prefix",
  suffix: "ps-menu-suffix",
  label: "ps-menu-label",
  icon: "ps-menu-icon",
  subMenuContent: "ps-submenu-content",
  SubMenuExpandIcon: "ps-submenu-expand-icon",
  disabled: "ps-disabled",
  active: "ps-active",
  open: "ps-open",
}
// hex to rgba converter
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
function App() {
  const [collapsed, setCollapsed] = React.useState(false)
  const [toggled, setToggled] = React.useState(false)
  const [broken, setBroken] = React.useState(false)
  const [rtl, setRtl] = React.useState(false)
  const [theme, setTheme] = React.useState("light")
  const [hasImage, setHasImage] = React.useState(false)

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(
              themes[theme].menu.menuContent,
              hasImage && !collapsed ? 0.4 : 1
            )
          : "transparent",
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
      "&:hover": {
        backgroundColor: hexToRgba(
          themes[theme].menu.hover.backgroundColor,
          hasImage ? 0.8 : 1
        ),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  }
  // handle on image change event
  const handleImageChange = (e) => {
    console.log(e.target.checked)
    setHasImage(e.target.checked)
  }
  // handle on RTL change event
  const handleRTLChange = (e) => {
    setRtl(e.target.checked)
  }
  // handle on theme change event
  const handleThemeChange = (e) => {
    setTheme(e.target.checked ? "dark" : "light")
  }
  return (
    <div style={{ display: "flex", height: "100vh", direction: rtl ? 'rtl' : 'ltr'  }}>
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, hasImage ? 0.9 : 1)}
        image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
        rtl={rtl}
        className="app"
        rootStyles={{
          color: themes[theme].sidebar.color,
        }}
      >
        <Menu menuItemStyles={menuItemStyles}>
          <MenuItem
            component={<Link to="/" className="link" />}
            className="menu1"
            icon={
              <MenuRoundedIcon
                onClick={() => {
                  setCollapsed(!collapsed)
                }}
              />
            }
          >
            <h2> QUICKPAY</h2>
          </MenuItem>
          <MenuItem
            component={<Link to="dashboard" className="link" />}
            icon={<GridViewRoundedIcon />}
          >
            Dashboard
          </MenuItem>
          <MenuItem icon={<ReceiptRoundedIcon />}> Invoices </MenuItem>
          <SubMenu label="Charts" icon={<BarChartRoundedIcon />}>
            <MenuItem icon={<TimelineRoundedIcon />}> Timeline Chart </MenuItem>
            <MenuItem icon={<BubbleChartRoundedIcon />}>Bubble Chart</MenuItem>
          </SubMenu>
          <SubMenu label="Wallets" icon={<WalletRoundedIcon />}>
            <MenuItem icon={<AccountBalanceRoundedIcon />}>
              Current Wallet
            </MenuItem>
            <MenuItem icon={<SavingsRoundedIcon />}>Savings Wallet</MenuItem>
          </SubMenu>
          <MenuItem
            component={<Link to="transactions" className="link" />}
            icon={<MonetizationOnRoundedIcon />}
          >
            Transactions
          </MenuItem>
          <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
            <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
            <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
            <MenuItem icon={<NotificationsRoundedIcon />}>
              Notifications
            </MenuItem>
          </SubMenu>
          <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
        </Menu>
      </Sidebar>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="dashboard"
            element={
              <Dashboard
                rtl={rtl}
                handleRTLChange={handleRTLChange}
                hasImage={hasImage}
                handleImageChange={handleImageChange}
                theme={theme}
                handleThemeChange={handleThemeChange}
                toggled={toggled}
                setToggled={setToggled}
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                broken={broken}
              />
            }
          />
          <Route path="transactions" element={<Transactions />} />
        </Routes>
      </section>
    </div>
  )
}

const Home = () => {
  return (
    <>
      <h1 className="header">WELCOME TO QUICKPAY</h1>
      <h3>Bank of the free</h3>
      <p>Lorem ipsum dolor sit amet...</p>
    </>
  )
}

const Dashboard = (props) => {
  const {
    broken,
    setToggled,
    toggled,
    collapsed,
    rtl,
    handleRTLChange,
    theme,
    handleThemeChange,
    hasImage,
    handleImageChange,
    setCollapsed,
    ...otherProps
  } = props
  return (
    <main>
      <div style={{ padding: "16px 24px", color: "#44596e" }}>
        <div style={{ marginBottom: "16px" }}>
          {broken && (
            <button className="sb-button" onClick={() => setToggled(!toggled)}>
              Toggle
            </button>
          )}
        </div>
        <div style={{ marginBottom: "48px" }}>
          React Pro Sidebar React Pro Sidebar provides a set of components for
          creating high level and customizable side navigation
        </div>

        <div style={{ padding: "0 8px" }}>
          <div style={{ marginBottom: 16 }}>
            <FormControlLabel
              control={
                <Checkbox
                  type="checkbox"
                  id="collapse"
                  checked={collapsed}
                  onChange={() => {
                    setCollapsed(!collapsed)
                  }}
                />
              }
              label="Collapse"
            />
          </div>

          <div style={{ marginBottom: 16 }}>
          <FormControlLabel
              control={<Checkbox
              id="rtl"
              checked={rtl}
              onChange={handleRTLChange}
              
            />}
            label="RTL"/>
          </div>

          <div style={{ marginBottom: 16 }}>
          <FormControlLabel
              control={<Checkbox
              id="theme"
              checked={theme === "dark"}
              onChange={handleThemeChange}
             
            />}
            label="Dark theme"/>
          </div>

          <div style={{ marginBottom: 16 }}>
            <FormControlLabel
              control={<Checkbox
              id="image"
              checked={hasImage}
              onChange={handleImageChange}
              
            />
              }
              label="Image"/>
          </div>
        </div>
      </div>
    </main>
  )
}

const Transactions = () => {
  return (
    <>
      <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1>
      <h3>Seamless Transactions</h3>
      <p>Lorem ipsum dolor sit amet...</p>
      <Button  variant="contained" color="primary">xx</Button>
      <ComponentMUI/>
    </>
  )
}

export default App
