/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
            fontFamily: {
                Outfit: ["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"]
            },
            animation: {
                spin_slow: 'spin 10s linear infinite'
            },
            colors: {
                mainBrand: '#111111',
                pageBg: '#F7F7F5',
                cardBg: '#FFFFFF',
                supportingText: '#737373',
                primaryCta: '#111111',
                chordpediaBg: '#1A1A1A',
                darkHover: '#1e293b',
                darkTheme: '#0F0F0F',
                brandNavy: '#111111',
                brandCrimson: '#111111',
                bodyText: '#111111',
                borderColor: '#E5E5E3'
            },
            boxShadow: {
                'premium': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
            }
        },
    },
    darkMode: 'selector',
    plugins: [],
}