// Write your code here
import './index.css'

const TabItem = props => {
  const {tab, onUpdateTab, isActiveTab} = props
  const {displayText, tabId} = tab

  const tabSelected = isActiveTab ? 'active-tab' : ''

  const onClickingTab = () => {
    onUpdateTab(tabId)
  }
  return (
    <li>
      <button
        type="button"
        className={`tab-item ${tabSelected}`}
        onClick={onClickingTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
