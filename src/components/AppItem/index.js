// Write your code here

import './index.css'

const AppItem = Props => {
  const {apps} = Props
  const {appName, imageUrl} = apps
  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-image " />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
