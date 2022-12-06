import { FloatButton } from 'antd';
import { MessageFilled, QqCircleFilled } from '@ant-design/icons';

const uin = 297376376;

const BottomApart = () => {

  function handleOpenTalk() {
    window.open(`tencent://message/?uin=${uin}`);
  }
  return <div>
    <FloatButton.Group icon={<QqCircleFilled />} type="primary" trigger="hover" >
      <FloatButton icon={<MessageFilled />} onClick={handleOpenTalk} />
      <FloatButton.BackTop />
    </FloatButton.Group>
  </div>
}

export default BottomApart;
