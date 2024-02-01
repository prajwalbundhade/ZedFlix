import { useEffect } from 'react';

import {fetchDataFromApi} from './utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { getApiconfiguration } from './store/homeSlice';

getApiconfiguration

function App() {
  const dispatch = useDispatch();
  const  {url} = useSelector((state) => state.home);

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiconfiguration(res));
    }
    );
  }; 

  return (
    
      <div className='App'>
        App
        {url?.total_pages}   
        
      </div>
  
  );
}

export default App
