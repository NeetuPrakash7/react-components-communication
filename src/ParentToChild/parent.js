import React  from 'react';
import Child  from './child.js';;

const Parent = (props) => {
    return( 
        <div>
           <Child doWhatever={props.changeTheWorldEvent} title={props.title}/>
           <Child doWhatever={props.keepTheWorldSameEvent} title={props.title}/>
        </div>
        
        )
}


export default Parent;