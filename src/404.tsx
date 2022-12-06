import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import { withTranslation } from "react-i18next";
import { history } from 'umi';

const NotFound = ({ t }) => {

  function handleBackHome() {
    history.replace('/')
  }
  return <Result
    icon={<SmileOutlined />}
    title={t('页面不存在')}
    extra={<Button type="primary" onClick={handleBackHome}>返回首页</Button>}
  />
}
export default withTranslation('translations')(NotFound);
