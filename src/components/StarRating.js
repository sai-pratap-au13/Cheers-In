import React from 'react';


const width = 110;

const style1= {
    styleOuter: {
        overFlow:'hidden'
    },
    starEmptyInner:{
        position:'absolute',
        width:`${width}px`
    },
    star:{
        padding: '1px'
    },
    starInner:{
        width : `${width}px`
    }

};

const cropWidth = (rating) =>{
    return Math.floor(rating * width /5);
};
const StarRating = (props) =>{

    const containerStyle = {width:`${cropWidth(props.rating)}px`}
    return(
        <div>
            <div style={style1.starOuter}>
                <div style={containerStyle}>
                    <div style={style1.starEmptyInner}>
                        <i className="fa fa-star-o fa-lg" style={style1.star}></i>
                        <i className="fa fa-star-o fa-lg" style={style1.star}></i>
                        <i className="fa fa-star-o fa-lg" style={style1.star}></i>
                        <i className="fa fa-star-o fa-lg" style={style1.star}></i>
                        <i className="fa fa-star-o fa-lg" style={style1.star}></i>
                    </div>
                    <div style={style1.starInner}>
                        <i className="fa fa-star-o fa-lg" style={style1.star}></i>
                        <i className="fa fa-star-o fa-lg" style={style1.star}></i>
                        <i className="fa fa-star-o fa-lg" style={style1.star}></i>
                        <i className="fa fa-star-o fa-lg" style={style1.star}></i>
                        <i className="fa fa-star-o fa-lg" style={style1.star}></i>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default StarRating;