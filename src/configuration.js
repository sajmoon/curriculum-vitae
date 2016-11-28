import tinycolor from 'tinycolor2'

const base = {
  primary: '#9D96B8',
  secondary: '#A9CBB7',
  tertiary: 'blue',
  complementary: '#7E3548'
}

const colors = {
  topbar: {
    background: tinycolor(base.primary).saturate(3).toHexString(),
    font: tinycolor('white').darken(5).toHexString()
  },
  experience: {
    header: {
      background: tinycolor(base.tertiary).desaturate(30).spin(-15).lighten(30)
        .toHexString(),
      font: tinycolor('white').darken(5).toHexString()
    },
    odd: tinycolor(base.secondary).lighten(20).toHexString(),
    even: tinycolor(base.secondary).brighten(10).lighten(13).toHexString(),
    hover: tinycolor(base.secondary).lighten(3).toHexString()
  }
}

export default colors
