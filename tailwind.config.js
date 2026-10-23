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
                darkHover: '#1e293b',
                darkTheme: '#020617',
                brandNavy: '#1F3A5F',
                brandCrimson: '#8B1E1E',
                pageBg: '#F7F7F7',
                bodyText: '#2B2B2B',
                borderColor: '#E2E2E2'
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