import {createRoot} from "react-dom/client"
import Header from "./Header"
import Main2 from "./main2"
const root = createRoot(document.getElementById('root'))
root.render(
  <>
  <title>Chef DeepSeek</title>
  <Header/>
  <Main2/>
  </>
)