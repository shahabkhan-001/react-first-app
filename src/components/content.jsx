import ContentOne from "./content1";
import ContentTwo from "./content2";
import ContentThree from "./content3";

function Content(){
    return(
        <>
        <div className="Main-Content my-5">
            <div className="row mx-1">
            <div  className="col-lg-4 col-md-6 col-sm-12 my-2">
                <ContentOne />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 my-2">
                <ContentTwo />                
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 my-2">
                <ContentThree />                
            </div>            
            </div>
        </div>
        </>
    )
}
export default Content;