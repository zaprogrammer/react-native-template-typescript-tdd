module.exports = {
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '\\.(css|less|png)$': 'identity-obj-proxy',
    },
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'png'],
    setupFiles: [
        "./node_modules/react-native-gesture-handler/jestSetup.js"
    ]
};
