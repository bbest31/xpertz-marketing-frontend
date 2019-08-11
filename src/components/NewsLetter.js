
import React from 'react';
import '../CSS/Header.css';
import { Button } from 'react-bootstrap';
import xSmall from '../asset/x-small.png'

function NewsLetter() {
    return (
            <div>
                <Button style={{backgroundColor:"white",color:"black",fontSize:42}} type="button" className="btn btn-secondary btn-lg">
                    <img src={xSmall} alt="Logo" height="48" /> Join Newsletter
                </Button>
            </div>
    );
}

export default NewsLetter