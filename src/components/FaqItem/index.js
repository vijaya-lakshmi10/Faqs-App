// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component{
    state={isActive:false}

    onTogglePlusMinusBtn=()=>{
        this.setState(prevState=>({
            isActive:!prevState.isActive
        }))
    }

    render(){
        const {isActive}=this.state
        const {faqDetails}=this.props
        const {questionText,answerText}=faqDetails
        const imgUrls = isActive ? "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png" : "https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
        const altLabels = isActive ? 'minus' : 'plus'
        return(
            <li className="faq-list-item">
            <div className="faq-item-container">
            <h1 className="question">{questionText}</h1>
            <button className="plus-minus-btn" type="button" onClick={this.onTogglePlusMinusBtn}>
            <img src={imgUrls} className="plus-minus-img" alt={altLabels}/>
            </button>
            </div>
            {isActive && (
            <div>
            <hr className="horizontal-line"/>
            <p className="answer">{answerText}</p>
            </div>
            )}
            </li>
        )
    }
}
export default FaqItem