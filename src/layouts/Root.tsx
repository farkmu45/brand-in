import { NavLink, Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/branding'>Branding</NavLink>
      <NavLink to='/webinars'>Webinars</NavLink>
      <NavLink to='/promote'>Promote</NavLink>
      <div>Root</div>
      <Outlet />
    </>
  )
}
