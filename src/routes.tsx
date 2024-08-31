import Root from '@/layouts/Root'
import Branding from '@/pages/branding'
import Home from '@/pages/home'
import Promote from '@/pages/promote'
import Webinars from '@/pages/webinars'
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
