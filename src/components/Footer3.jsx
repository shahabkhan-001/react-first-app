function FooterThree(){
    return(
        <>
        <div className="card Footer-Box border-0" style={{width : "16rem" , backgroundColor : "#2B2B2B"}}>
        <div className="d-flex mb-2">
        <span className="material-symbols-outlined icon" style={{color : "#30C6F0"}}>drafts</span>
            <div>
            <span style={{fontSize : "24px" , color : "#30C6F0"}}>EMAIL
                </span> 
                <br />
                <span style={{fontSize : "12px" , color : "#fff"}}>CONTACT US</span>
            </div>
        </div>
        <div style={{fontSize : "12px" ,  color : "#fff"}}>
            <span><span style={{color : "#30C6F0"}}>Email:</span> Infomail@dot.com</span>
            <br />
            <span><span style={{color : "#30C6F0"}}>Tel:</span> +31(0)xx xxx xx xx</span>
            <br />
            <span><span style={{color : "#30C6F0"}}>Address:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
        </div>

        </div>
        </>
    )
}
export default FooterThree;