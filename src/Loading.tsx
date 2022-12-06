import { Spin } from 'antd'

export default () => {
  return <Spin spinning={true} style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    minHeight: '59vh',
    margin: "auto"
  }}></Spin>
}
