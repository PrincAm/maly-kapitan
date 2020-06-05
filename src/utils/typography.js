import Typography from "typography"
import altonTheme from "typography-theme-alton"

altonTheme.googleFonts = [
  {
    name: "Lato",
    styles: ["400", "400i", "600", "700"],
  },
]

altonTheme.bodyFontFamily = ["Lato", "sans-serif"]
altonTheme.baseFontSize = 21
altonTheme.baseLineHeight = 1.5

altonTheme.overrideThemeStyles = ({ adjustFontSizeTo, scale, rhythm }) => {
  return {
    "p, h1, h2, h3, h4, h5, h6, b": {
      color: "#363636",
    },
    a: {
      color: "#4f868e",
      boxShadow: "none",
      backgroundImage: "none",
    },
    "a.gatsby-resp-image-link": {
      boxShadow: "none",
    },
    "h1 a, h2 a, h3 a, h4 a, h5 a, h6 a": {
      backgroundImage: "none",
    },
  }
}

const typography = new Typography(altonTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
