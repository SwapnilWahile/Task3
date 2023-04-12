import React from 'react'
import { Outlet, Link } from "react-router-dom";
export default function Blank() {
  return (
    <div><Link to="/" ></Link> <Outlet /></div>
  )
}
