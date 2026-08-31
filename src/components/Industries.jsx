import React from 'react'
import "./css/Industries.scss";

const Industries = () => {
    let mapData = [
        "Construction Chemicals ",
        "Adhesive Industry ",
        "Textile Industry ",
        "Automotive Industry ",
        "Home Care & Cleaning ",
        "Agriculture ",
        "Cosmetic Industry ",
        "Packaging ",
        "Paint and Coating Industry ",
    ]
    return (
        <div className='supplementaryServices'>
            <div className='supplementaryInnerWrapper'>
                <div className='supplementaryHeader'>
                    <div className='supplementaryMegaTitle'>
                        Industries <span>We Serve</span>
                    </div>
                    <p className='supplementaryMegaContent'>
                        With our cutting-edge solutions and premium chemical products, we meet the demands of industries across the board.
                    </p>
                </div>

                <div className='mapItemContainer'>
                    {mapData.map((item, index) => {
                        return (
                            <div key={index} className='item'>{item}</div>
                        )
                    })}

                </div>



            </div>
        </div>
    )
}

export default Industries