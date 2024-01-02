"use client"
import TimeAgo from "react-timeago"
import React from 'react'

type Props = {
    time : string
}


function LiveTimeStamp({time} : Props) {

  return (
    <TimeAgo date={time} suppressHydrationWarning/>
  )
}

export default LiveTimeStamp
