import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  scaleRatio: 2,
  headerFontFamily: ['Source Sans Pro', 'sans-serif'],
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    p: {
      marginBottom: rhythm(3/2),
    },
    'h2,h3': {
      marginBottom: rhythm(3/2),
      marginTop: rhythm(2),
    }
  })

});


const { rhythm, scale } = typography;
export { rhythm, scale, typography as default };