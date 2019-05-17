
// ref: https://umijs.org/config/
import pageRoutes from './router.config';
export default {
  publicPath:"./",
  exportStatic: {
    htmlSuffix: false,
    dynamicRoot: true,
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'umi-template-admin',
      dll: false,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
    ],
      },
    }],
  ],
  routes: pageRoutes
}
