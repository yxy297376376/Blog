import { Typography, Timeline } from 'antd'

const { Title } = Typography;
const WritingLine = () => {
  return <div>
    <Title level={3}>Writing</Title>
    <Timeline>
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
      <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
      <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
    </Timeline>
  </div>
}

export default WritingLine;
