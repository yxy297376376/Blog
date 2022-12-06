import React, { useEffect } from "react";
import BIRD1 from '@/assets/images/bird.jpg';
import { useDispatch } from 'dva';
import { Dispatch } from '@/models/connect'
import PageTitle from "@/components/PageTitle";
import styles from './index.less'

const About = () => {
  const dispatch = useDispatch<Dispatch>();

  return <div>
    <div className={styles['header']}>
      <PageTitle title='关于' />
    </div>
  </div>
}

export default About;
