
import './Topbar.css'
import './Home.css'
import { Button} from '@mui/material'


const Topbar = (props) => {
  return (
    <div className='topbar' >
      <div className="topbarwrapper">
        <div className="topleft">
          <p>DAILY KART</p>
        </div>
       
        <div className='topright'>

        <Button variant="contained" onClick={props.xxx} >SIGN OUT</Button>
         
        </div>

      </div>
    </div>
  )
}

export default Topbar