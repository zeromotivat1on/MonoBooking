import './SpecificOffer.css';
import Button from '../../components/ButtonComponent/Button';
import { newWindowLocationHref } from '../../common/windowModifications';

import React from 'react'

export default function SpecificOffer() {
    return (
        <div className="padding-for-nav">
            <div id='specific-offer' className="main-block">
                <div className='offer-info'>
                    <img className="offer-image" src="https://monoprint.com.ua/images/product_categories/flyers/standard.jpg" alt="" />
                    <div className="offer-info-heading">
                        <h2>*User name*</h2>
                        <p>*User role*</p>
                        <p>*something else*</p>
                    </div>
                    <div className="offer-tags">
                        <ul>
                            <li>awd</li>
                            <li>bsklrmsbkl</li>
                            <li>bdflknskla</li>
                            <li>uberw</li>
                            <li>dawd</li>
                            <li>awd</li>
                            <li>bsklrmsbkl</li>
                            <li>bdflknskla</li>
                        </ul>
                        <a href="/">More tags</a>
                    </div>
                </div>
                <div className="offerDescription">
                   <h3>Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className='button-block'>
                    <div className="dark-btn">
                        <Button 
                            buttonText="Check Profile" 
                            buttonClasses=""
                            buttonFunc={ () => newWindowLocationHref('/main') }
                        />
                         <Button 
                            buttonText="Book offer"
                            buttonClasses=""
                            buttonFunc={ () => newWindowLocationHref('/main') }
                        />
                    </div> 
                  
                <Button 
                    buttonText="have some questions?" 
                    buttonClasses=""
                    buttonFunc={ () => newWindowLocationHref('/main') }
                />
                </div>
     
            </div>
            </div>
    )
    }