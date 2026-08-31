import React from 'react'
import './css/OurSkills.scss'
import ourwork from '../assets/ourwork.jpg'

function OurSkills() {
    return (
        <div className='our_skills'>
            <div className='our_skills_left'>

                <h3>
                    We love what we do
                </h3>
                <h1>
                    our skills
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, cumque esse omnis facilis nisi quo quidem numquam unde natus.
                </p>

                <h6>Construction</h6>
                <div className='bar'>
                    <div className='first_bar'>82%</div>
                </div>
                <h6>Inovation</h6>
                <div className='bar'>
                    <div className='second_bar'>69%</div>

                </div>
                <h6>Planning</h6>
                <div className='bar'>
                    <div className='third_bar'>86%</div>
                </div>

            </div>
            <div className='our_skills_right'>
                <img src={ourwork} alt="" />
            </div>
        </div>
    )
}

export default OurSkills
