import React, {useState, useEffect} from 'react';

export default function InfoButton(props) {
    return (
        <div className={props.info ? 'info__button info__button--act' : 'info__button'}>
            <input 
                type="checkbox"
                id="info-button"
                className="info__button-input"
                onChange={props.change}  
            />
            <label 
                htmlFor="info-button"
                className={props.info ? 'info__button-label info__button-label--act' : 'info__button-label'}
            >
                {props.info ? 'x' : 'í'}
            </label>
        </div>
    )
}
 