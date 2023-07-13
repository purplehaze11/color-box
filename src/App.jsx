import ColorBox from './ColorBox.jsx'
import './App.css'

function App() {
  const colors = ['#4fe7b4', '#f31bcb', '#dc5f03', '#ea1e61', '#d47cb2', '#040b3a', '#379202', '#eacd25', '#9f91b7', '#f41435']
  return (
    <div id='container' className='h-fit flex flex-row flex-wrap'>
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
    </div>
  )
}

export default App
