import FooterOne from "./Footer1";
import FooterTwo from "./Footer2";
import FooterThree from "./Footer3";
function Footer(){
    return(
        <>
        <div style={{backgroundColor : "#2B2B2B"}}>
            <div className="row footer p-2 mx-2">
                <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                    <FooterOne />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                        <FooterTwo />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                            <FooterThree /></div>
                            </div>
        </div>
        
        </>
    )
}
export default Footer;