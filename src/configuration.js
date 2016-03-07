import tinycolor from 'tinycolor2'

var base = {
  primary: '#9D96B8',
  secondary: '#A9CBB7',
  tertiary: 'blue',
  complementary: '#7E3548'
}

var colors = {
  topbar: {
    background: tinycolor(base.primary).saturate(3).toHexString(),
    font: tinycolor('white').darken(5).toHexString()
  },
  experience: {
    header: {
      background: tinycolor(base.tertiary).desaturate(30).spin(-15).lighten(30).toHexString(),
      font: tinycolor('white').darken(5).toHexString(),
    },
    odd: tinycolor(base.secondary).lighten(16).toHexString(),
    even: tinycolor(base.secondary).brighten(10).lighten(10).toHexString(),
    hover: tinycolor(base.secondary).darken(1).toHexString()
  }
}

export {
  colors
}
