import { ElButton, ElSelect, ElInput } from 'element-plus';
import 'element-plus/dist/index.css';

export default {
  install(app) {
    app.use(ElButton);
    app.use(ElSelect);
    app.use(ElInput);
  }
};