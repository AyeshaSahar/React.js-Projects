import Button from './Button'
import { useLocation} from 'react-router-dom'

const Header = ({ onAddBtn, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'purple'}
          text={showAdd ? 'Close' : 'Add Task'}
          onClick={onAddBtn}
        />
      )}
    </header>
  )
}

export default Header;