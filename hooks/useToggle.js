import {useState,useCallback} from 'react'
/**
 * 
 * @param {false} initailValue 
 * @return {Array} with the value and a setter function
 * @method useCallback  to preserve the reference of  setter function 
 * @readonly it helps to not re-render in every toggle
 * 
 */
export default function useToggle (initailValue = false){
    const [value,setValue] =useState(initailValue)
    const toggleChecked = useCallback(() => {
        setValue((prev) => !prev);
      },[]);
    return [value,toggleChecked]

}