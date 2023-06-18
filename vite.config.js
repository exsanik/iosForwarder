import { createHtmlPlugin } from 'vite-plugin-html'

import appConfig from './app.config.json'

export default () => {
  return {
    plugins: [
      createHtmlPlugin({
        minify: true,
        inject: {
          data: appConfig
        }
      }),
    ],
  }
}