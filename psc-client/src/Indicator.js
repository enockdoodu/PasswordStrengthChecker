import React from 'react'

const Indicator = ({entropy}) => {
    console.log(entropy);
    const funcProgressColor = () => {
        if (entropy <= 0) {
            return '#828282'
        } else if (entropy <= 25){
            return '#ff0000' 
        }else if (entropy <= 60){
            return '#FFAD00'
        }else if (entropy <= 80){
            return '#F0F96D' 
        }else if (entropy < 100){
             return '#00b500'
        }else {
            return '#05A41E'
        }
    }

    const ChangeIndicator = () => ({
    width: `${entropy}%`,
    background: funcProgressColor(),
    height: '7px'
    })
  return (
    <div className='progress' style={{height:'7px'}}>
        <div className='progress-bar' style={ChangeIndicator()}></div>

    </div>
  )
}

export default Indicator