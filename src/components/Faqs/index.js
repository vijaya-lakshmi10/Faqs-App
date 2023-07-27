// Write your code here.
import './index.css'

import FaqItem from '../FaqItem'

const Faqs = props => {
    const {faqsList} = props
    return(
        <div className="faq-app-container">
        <div className="faq-container">
        <h1 className="heading">FAQs</h1>
        <ul className="faqs-list-container">
        {faqsList.map(eachFaq=>(
            <FaqItem key={eachFaq.id} faqDetails={eachFaq}/>
        ))}
        </ul>
        </div>
        </div>
    )
}
export default Faqs
