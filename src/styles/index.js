import { createTheme } from "@mui/material";

export const Colors = {
    primary: "#00adb5",
    secondary: "#00c7c0",
    success: "#4caf50",
    info: "#00d5ff",
    danger: "#FF5722",
    warning: "#FFC107",
    dark: "#22414d",
    light: "#aaa",
    muted: "#abafb3",
    border: "#DDDFE1",
    inverse: "#2F3D4A",
    shaft: "#333",
    dove_gray: "#d5d5d5",
    body_bg: "#f3f6f9",
    white: "#fff",
    black: "#000",
    light_black: "rgba(0,0,0,0.1)",
    dark_black: "rgba(0,0,0,0.7)",
    bgd: "url('linear-gradient(to right, #2c3e50, #3498db)')",
};

const overrides = {
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: "search" },
                    style: {
                        color: Colors.black,
                        backgroundColor: Colors.primary,
                        width: "200px",
                        padding: "10px",
                        fontWeight: "bold",
                        boxShadow: "0px 1px 1px rgba(0,0,0,0.2)",
                    },
                },
            ],

            styleOverrides: {
                root: {
                    backgroundColor: Colors.white,
                    color: Colors.primary,
                    borderColor: Colors.primary,
                },
            },
        },
    },
};

const theme = createTheme(overrides);

export { overrides };
export default theme;
