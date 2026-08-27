export const colors = {
  background: '#120E0A',
  surface: '#201812',
  surfaceRaised: '#2B2018',
  border: '#3D2D20',
  text: '#F5EAD8',
  textSecondary: '#C2AD92',
  textMuted: '#8A7863',
  primary: '#E0B35A',
  primaryDark: '#B68A3A',
  success: '#9BCB7A',
  warning: '#E2A34F',
  danger: '#D96C55',
  info: '#78B7C9',
  overlay: 'rgba(10, 7, 4, 0.78)',
  shadow: 'rgba(0, 0, 0, 0.38)',
  shelf: {
    top: '#5A3E28',
    front: '#3A281B',
    edge: '#6B4A2F',
    shadow: 'rgba(0, 0, 0, 0.42)',
  },
  stuffed: {
    fur: '#C7A07B',
    furDark: '#9D7A57',
    eye: '#2B211A',
    blush: '#D98A6C',
  },
  badge: {
    active: '#9BCB7A',
    dormant: '#78B7C9',
    rare: '#E0B35A',
    background: '#241B14',
    border: '#4A3828',
  },
};

export const spacing = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
};

export const typography = {
  display: {
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    letterSpacing: 0.1,
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
  bodySmall: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
  },
  caption: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '500',
  },
  label: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
};

export const radii = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  pill: 999,
};

export const sizes = {
  card: 112,
  avatar: 72,
  badge: 40,
  shelfHeight: 168,
  overlayIcon: 180,
};

export const shadows = {
  card: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.42,
    shadowRadius: 12,
    elevation: 8,
  },
  overlay: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.55,
    shadowRadius: 18,
    elevation: 12,
  },
};

const theme = {
  colors,
  spacing,
  typography,
  radii,
  sizes,
  shadows,
};

export default theme;