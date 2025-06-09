import lineClamp from '@tailwindcss/line-clamp';

/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [lineClamp],
};

export default config;
