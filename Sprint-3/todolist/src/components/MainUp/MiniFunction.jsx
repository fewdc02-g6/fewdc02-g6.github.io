import React from 'react'


export default function MiniFunction() {
    let gridIcon = <svg className="grid-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="35" height="35" viewBox="0 0 50 50" enableBackground="new 0 0 50 50" xmlSpace="preserve">
<path d="M8.775,24.477h12.914c0.553,0,1-0.447,1-1V10.563c0-0.553-0.447-1-1-1H8.775c-0.553,0-1,0.447-1,1v12.914
   C7.775,24.029,8.223,24.477,8.775,24.477z M9.775,11.563h10.914v10.914H9.775V11.563z"/>
<path d="M25.861,24.477h12.914c0.553,0,1-0.447,1-1V10.563c0-0.553-0.447-1-1-1H25.861c-0.553,0-1,0.447-1,1v12.914
	C24.861,24.029,25.309,24.477,25.861,24.477z M26.861,11.563h10.914v10.914H26.861V11.563z"/>
<path d="M8.775,41.563h12.914c0.553,0,1-0.447,1-1V27.648c0-0.553-0.447-1-1-1H8.775c-0.553,0-1,0.447-1,1v12.914
	C7.775,41.115,8.223,41.563,8.775,41.563z M9.775,28.648h10.914v10.914H9.775V28.648z"/>
<path d="M24.861,40.563c0,0.553,0.447,1,1,1h12.914c0.553,0,1-0.447,1-1V27.648c0-0.553-0.447-1-1-1H25.861c-0.553,0-1,0.447-1,1
	V40.563z M26.861,28.648h10.914v10.914H26.861V28.648z"/>
</svg>

    return (
        <div>
            <div className="miniFunction" id="top">
                <div id='gridFun1' className="gridFunction">{gridIcon} </div>
                
                <div id='gridFun3' className="gridFunction" title="0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.997 13.985c.01 1.104-.88 2.008-1.986 2.015-1.105.009-2.005-.88-2.011-1.984-.01-1.105.879-2.005 1.982-2.016 1.106-.007 2.009.883 2.015 1.985zm-.978-3.986c-1.104.008-2.008-.88-2.015-1.987-.009-1.103.877-2.004 1.984-2.011 1.102-.01 2.008.877 2.012 1.982.012 1.107-.88 2.006-1.981 2.016zm7.981-4.014c.004 1.102-.881 2.008-1.985 2.015-1.106.01-2.008-.879-2.015-1.983-.011-1.106.878-2.006 1.985-2.015 1.101-.006 2.005.881 2.015 1.983zm-12 15.847c4.587.38 2.944-4.492 7.188-4.537l1.838 1.534c.458 5.537-6.315 6.772-9.026 3.003zm14.065-7.115c1.427-2.239 5.846-9.748 5.846-9.748.353-.623-.429-1.273-.975-.813 0 0-6.572 5.714-8.511 7.525-1.532 1.432-1.539 2.086-2.035 4.447l1.68 1.4c2.227-.915 2.868-1.04 3.995-2.811zm-12.622 4.806c-2.084-1.82-3.42-4.479-3.443-7.447-.044-5.51 4.406-10.03 9.92-10.075 3.838-.021 6.479 1.905 6.496 3.447l1.663-1.456c-1.01-2.223-4.182-4.045-8.176-3.992-6.623.055-11.955 5.466-11.903 12.092.023 2.912 1.083 5.57 2.823 7.635.958.492 2.123.329 2.62-.204zm12.797-1.906c1.059 1.97-1.351 3.37-3.545 3.992-.304.912-.803 1.721-1.374 2.311 5.255-.591 9.061-4.304 6.266-7.889-.459.685-.897 1.197-1.347 1.586z"/></svg> </div>
                
            </div>
            <div className="switches">
                <div id="color-Box1" className="colorBox bg-red"></div>
                <div id="color-Box2" className="colorBox bg-orange"></div>
                <div id="color-Box3" className="colorBox bg-yellow"></div>
                <div id="color-Box4" className="colorBox bg-green"></div>
                <div id="color-Box5" className="colorBox bg-green2"></div>
                <div id="color-Box6" className="colorBox bg-blue"></div>
                <div id="color-Box7" className="colorBox bg-purple"></div>
                <div id="color-Box8" className="colorBox bg-gray"></div>
                <div id="color-Box9" className="colorBox bg-black"></div>
            </div>
            <div className="countDiv"><span id="count-memo">3</span>&nbsp; Task</div>
        </div>
    )
}
