import React, { useEffect } from 'react'

const UseTitle = (titleName) => {
    useEffect(()=>{
        document.title=`${titleName}-CodeBook`;
    },[titleName])
    return null;
  
}

export default UseTitle
