import { useEffect } from 'react';

import {fetchDataFromApi} from './utils/api';

function App() {

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
    }
    );
  }  

  return (
    <>

    </>
  )
}

export default App
