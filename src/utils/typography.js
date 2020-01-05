import Typography from "typography"
import twinPeaksTheme from "typography-theme-twin-peaks"

twinPeaksTheme.googleFonts = [
  {
    name: "Lato",
    styles: ["400", "400i", "600", "700"],
  },
]

twinPeaksTheme.bodyFontFamily = ["Lato", "sans-serif"]

twinPeaksTheme.overrideThemeStyles = () => {
  return {
    a: {
      color: "#0f4c75",
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

const typography = new Typography(twinPeaksTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
