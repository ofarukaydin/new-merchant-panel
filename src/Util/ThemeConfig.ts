enum color {
  primary = '#1DA57A',
  transparent = 'transparent',
  current = 'currentColor',
  black = '#000',
  white = '#fff',
  gray100 = '#f7fafc',
  gray200 = '#edf2f7',
  gray300 = '#e2e8f0',
  gray400 = '#cbd5e0',
  gray500 = '#a0aec0',
  gray600 = '#718096',
  gray700 = '#4a5568',
  gray800 = '#2d3748',
  gray900 = '#1a202c',
  red100 = '#fff5f5',
  red200 = '#fed7d7',
  red300 = '#feb2b2',
  red400 = '#fc8181',
  red500 = '#f56565',
  red600 = '#e53e3e',
  red700 = '#c53030',
  red800 = '#9b2c2c',
  red900 = '#742a2a',
  orange100 = '#fffaf0',
  orange200 = '#feebc8',
  orange300 = '#fbd38d',
  orange400 = '#f6ad55',
  orange500 = '#ed8936',
  orange600 = '#dd6b20',
  orange700 = '#c05621',
  orange800 = '#9c4221',
  orange900 = '#7b341e',
  yellow100 = '#fffff0',
  yellow200 = '#fefcbf',
  yellow300 = '#faf089',
  yellow400 = '#f6e05e',
  yellow500 = '#ecc94b',
  yellow600 = '#d69e2e',
  yellow700 = '#b7791f',
  yellow800 = '#975a16',
  yellow900 = '#744210',
  green100 = '#f0fff4',
  green200 = '#c6f6d5',
  green300 = '#9ae6b4',
  green400 = '#68d391',
  green500 = '#48bb78',
  green600 = '#38a169',
  green700 = '#2f855a',
  green800 = '#276749',
  green900 = '#22543d',
  teal100 = '#e6fffa',
  teal200 = '#b2f5ea',
  teal300 = '#81e6d9',
  teal400 = '#4fd1c5',
  teal500 = '#38b2ac',
  teal600 = '#319795',
  teal700 = '#2c7a7b',
  teal800 = '#285e61',
  teal900 = '#234e52',
  blue100 = '#ebf8ff',
  blue200 = '#bee3f8',
  blue300 = '#90cdf4',
  blue400 = '#63b3ed',
  blue500 = '#4299e1',
  blue600 = '#3182ce',
  blue700 = '#2b6cb0',
  blue800 = '#2c5282',
  blue900 = '#2a4365',
  indigo100 = '#ebf4ff',
  indigo200 = '#c3dafe',
  indigo300 = '#a3bffa',
  indigo400 = '#7f9cf5',
  indigo500 = '#667eea',
  indigo600 = '#5a67d8',
  indigo700 = '#4c51bf',
  indigo800 = '#434190',
  indigo900 = '#3c366b',
  purple100 = '#faf5ff',
  purple200 = '#e9d8fd',
  purple300 = '#d6bcfa',
  purple400 = '#b794f4',
  purple500 = '#9f7aea',
  purple600 = '#805ad5',
  purple700 = '#6b46c1',
  purple800 = '#553c9a',
  purple900 = '#44337a',
  pink100 = '#fff5f7',
  pink200 = '#fed7e2',
  pink300 = '#fbb6ce',
  pink400 = '#f687b3',
  pink500 = '#ed64a6',
  pink600 = '#d53f8c',
  pink700 = '#b83280',
  pink800 = '#97266d',
  pink900 = '#702459',
}

const spacing = {
  px: '1px',
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '56': '14rem',
  '64': '16rem',
};

enum fontSize {
  'xs' = '0.75rem',
  'sm' = '0.875rem',
  'base' = '1rem',
  'lg' = '1.125rem',
  'xl' = '1.25rem',
  '2xl' = '1.5rem',
  '3xl' = '1.875rem',
  '4xl' = '2.25rem',
  '5xl' = '3rem',
  '6xl' = '4rem',
}

enum fontWeight {
  hairline = 100,
  thin = 200,
  light = 300,
  normal = 400,
  medium = 500,
  semibold = 600,
  bold = 700,
  extrabold = 800,
  black = 900,
}

enum boxShadow {
  xs = '0 0 0 1px rgba(0, 0, 0, 0.05)',
  sm = '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  default = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl' = '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner = 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  outline = '0 0 0 3px rgba(66, 153, 225, 0.5)',
  none = 'none',
}

enum letterSpacing {
  tighter = '-0.05em',
  tight = '-0.025em',
  normal = '0',
  wide = '0.025em',
  wider = '0.05em',
  widest = '0.1em',
}

enum lineHeight {
  none = '1',
  tight = '1.25',
  snug = '1.375',
  normal = '1.5',
  relaxed = '1.625',
  loose = '2',
}

enum borderRadius {
  none = '0',
  sm = '0.125rem',
  default = '0.25rem',
  md = '0.375rem',
  lg = '0.5rem',
  full = '9999px',
}

export default {
  color: color,
  fontSize: fontSize,
  fontWeight: fontWeight,
  spacing: spacing,
  boxShadow: boxShadow,
  letterSpacing: letterSpacing,
  lineHeight: lineHeight,
  borderRadius: borderRadius,
};