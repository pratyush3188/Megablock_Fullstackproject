import React from 'react';
function Button({children,type='button',bgcolor=bg-green,textColor="white",classname='',...props}) {
    return ( <>
    <button className={`px-4 py-2 rounded-2xl ${bgcolor} ${textColor}`}{...props}>
        {children}
    </button>
    </> );
}

export default Button;