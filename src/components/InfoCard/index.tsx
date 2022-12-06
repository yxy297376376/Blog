import { Affix, Button } from 'antd';

const InfoCard = ({ style, className }) => {

  return <div className={className}>
    <Affix offsetTop={180} onChange={(affixed) => console.log(affixed)}>
      <Button type='primary'>120px to affix top</Button>
    </Affix>
  </div>;
};

export default InfoCard;
