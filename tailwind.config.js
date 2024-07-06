/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './imprint/index.html'],
    theme: {
        extend: {
            colors: {
                patina: {
                    '50': '#f4f9f8',
                    '100': '#dbece7',
                    '200': '#b6d9cf',
                    '300': '#8abeb1',
                    '400': '#589285',
                    '500': '#478578',
                    '600': '#376a60',
                    '700': '#2f564f',
                    '800': '#294641',
                    '900': '#253c38',
                    '950': '#11221f',
                },
                discord: '#303133'
            },
            spacing: {
                128: '32rem',
                240: '60rem'
            }
        },
    },
    plugins: []
}

