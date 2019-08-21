import React, { useState, useRef, useLayoutEffect } from 'react'
import { connect } from 'react-redux'

const Toolbar = ({dispatch}) => (
  <div  className="toolbar">
      <div className="toolbar__inner">
        <button 
         onClick={() => {
            dispatch({ 
              type: 'CREATE_SHAPE',
              shape_type: 'line'
            })
         }} 
         className="toolbar__button">
          Draw Line
        </button>  
      </div>
  </div>
)

const mapStateToProps = (state) => ({
  
})  

export default connect(mapStateToProps)(Toolbar)