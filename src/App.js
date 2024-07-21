import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UseMemo from './component/useMemo/useMemo';
import PagesEffect from './component/useEffect/PagesEffect';
import PageParam from './component/reactRouterDom/UseParam/PageParam';
import Mach from './component/UseMach/Mach';
import PageState from './component/useState/PageState';
import NavigatePage from './component/reactRouterDom/UseNavigate/NavigatePage';
import CallBackFunction from './component/callBackFunction/CallBackFunction';
import PageContext from './component/UseContext/PageContext';
import Memo from './component/memo/Memo';
import Home from './Pages/Home';
import PagesReducer from './component/useReducer/PagesReducer';
import PageCallback from './component/useCallback/PageCallback';

function App() {

  return (
    
    <div >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="use-memo" element={<UseMemo />} />
            <Route path="use-effect" element={<PagesEffect />} />
            <Route path="use-param" element={<PageParam />} />
            <Route path="use-mach" element={<Mach />} />
            <Route path="use-state" element={<PageState />} />
            <Route path="use-navigate" element={<NavigatePage />} />
            <Route path="call-back-function" element={<CallBackFunction />} />
            <Route path="use-context" element={<PageContext />} />
            <Route path="memo" element={<Memo />} />
            <Route path="use-reducer" element={<PagesReducer />} />
            <Route path="use-callback" element={<PageCallback />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
