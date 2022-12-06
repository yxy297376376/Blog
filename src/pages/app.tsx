import { history } from 'umi';

export function render(oldRender: any) {
  fetch('/api/auth').then((auth: any) => {
    if (auth.isLogin) { oldRender() }
    else {
      history.push('/login');
      oldRender()
    }
  });
}
