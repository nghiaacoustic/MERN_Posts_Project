import { useDispatch } from 'react-redux';
import * as actions from './redux/actions'

function App() {
  const dispatch = useDispatch()
  return (
    <p>This is blog app</p>
  );
}

export default App;
