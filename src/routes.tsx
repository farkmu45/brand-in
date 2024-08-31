import Branding from '@pages/branding/Branding'
import Home from '@pages/home/Home'
import Promote from '@pages/promote/Promote'
import Webinars from '@pages/webinars/Webinars'

type Routes = {
  path: string
  element: JSX.Element
  errorElement?: JSX.Element
}

const routes: Routes[] = [
  {
    path: '/',
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

export default routes
