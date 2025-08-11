import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import conf from './conf/conf'
function App() {
  const [count, setCount] = useState(0)
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  // console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID);
  // console.log(conf.appwritebucketid)
  // console.log(conf.appwritecollectionid)
  // console.log(conf.appwritedatabaseid)
  // console.log(conf.appwriteprojectid)
  // console.log(conf.appwriteurl)
  return (<>
  <h1>appwrite</h1>
  </> )
}

export default App
