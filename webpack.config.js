const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '@app': path.resolve(__dirname, 'src/app/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
    },
  },
};
