import tinycolor from 'tinycolor2'

const base = {
  primary: '#9D96B8',
  secondary: '#A9CBB7',
  tertiary: tinycolor('blue').desaturate(30).spin(-15).lighten(30)
    .toHexString(),
  complementary: '#7E3548'
}

const colors = {
  topbar: {
    background: base.primary,
    font: tinycolor('white').darken(5).toHexString()
  },
  experience: {
    header: {
      borderColor: tinycolor(base.tertiary).darken(10).toHexString(),
      background: base.tertiary,
      font: tinycolor('white').darken(5).toHexString()
    },
    odd: tinycolor('white').darken(3).toHexString(),
    even: tinycolor('white').darken(2).toHexString(),
    hover: tinycolor(base.secondary).lighten(10).toHexString(),
    border: tinycolor(base.secondary).lighten(1).toHexString()
  }
}

export default colors
