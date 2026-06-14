import './privacytermsunsubscribe.css';


export default function TermsPrivacyUnsubHeader({ page_title, page_subheading }) {

    return(
        <div className="termsPrivacyUnsubHeader">
            <h2>{page_title}</h2>
            {page_subheading && <h4 className='unsubscribe-subheading'>{page_subheading}</h4>}
        </div>
    )
}