import BoxOne from "./box1";
import BoxTwo from "./box2";
import BoxThree from "./box3";
import BoxFour from "./box4";

function MainBox(){
    return(
        <>
        <div className="Main-Div">
            <div className="row mx-5 Row-Box">
                <div className="col-lg-3 col-md-6 col-sm-12 my-2 p-0">
                    <div className="mx-2">
                        <BoxOne />
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 my-2 p-0">
                    <div className="mx-2">
                        <BoxTwo />
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 my-2 p-0">
                    <div className="mx-2">
                        <BoxThree />
                    </div>
                </div>               
 
                <div className="col-lg-3 col-md-6 col-sm-12 my-2 p-0">
                    <div className="mx-2">
                        <BoxFour />
                    </div>
                </div>               
            </div>
        </div>
        </>
    )
}
export default MainBox;
