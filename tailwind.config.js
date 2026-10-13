export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { ink: '#0A0A0A', accent: 'var(--accent)' },
    fontFamily: { display: ['"Barlow Condensed"', 'Impact', 'sans-serif'], sans: ['Barlow', 'system-ui', 'sans-serif'] }
  } },
  plugins: []
}
