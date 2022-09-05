function FooterOne(){
    return(
        <>
        <div className="card Footer-Box border-0" style={{width : "16rem" , backgroundColor : "#2B2B2B"}} >
        <div className="d-flex mb-2">
                <span className="material-symbols-outlined icon" style={{color : "#30C6F0"}}>alternate_email</span>
            <div>
            <span style={{fontSize : "24px" , color : "#30C6F0"}}>SUBSCRIBE
                </span> 
                <br />
                <span style={{fontSize : "12px" , color : "#fff"}}>GET NEWSLETTERS</span>
            </div>
        </div>
        <div className="d-flex subcribe">
            <input type="text" name="text" id="text" />
            <a href="_" style={{color : "#fff" , padding : "5px"}}> Subscribe</a>
        </div>

        </div>
        </>
    )
}
export default FooterOne;