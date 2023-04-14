import { createBrowserRouter } from 'react-router-dom'
// 导入组件
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
// 生成router配置对应关系
const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
  {
    path: '/login',
    element: <Login />,
  }
])
// 导出router
export default Router