import React from 'react'

const InputText = ({label,value,onValueChange}) => {
    return(
        <div>
            <h3>{label}</h3>
            <input 
            type="text" 
            value={value} 
            onChange={
                (e)=>{
                    onValueChange(e.target.value)
                }
            }
            />
        </div>
    )
}

export default InputText

export const xxt = 'AOBA'