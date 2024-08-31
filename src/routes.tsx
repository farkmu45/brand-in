import Root from '@/layouts/Root'
import Branding from '@pages/branding/Branding'
import Home from '@pages/home/Home'
import Promote from '@pages/promote/Promote'
import Webinars from '@pages/webinars/Webinars'
import { RouteObject } from 'react-router-dom'


const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />,
      },
      {
        path: '/branding',
        element: <Branding />,
      },
      {
        path: '/webinars',
        element: <Webinars />,
      },
      {
        path: '/promote',
        element: <Promote />,
      },
    ]
  },
]

export default routes
