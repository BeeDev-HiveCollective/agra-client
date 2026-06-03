


export default function TermsPrivacyUnsubHeader({ page_title, page_subheading }) {

    return(
        <div className="termsPrivacyUnsubHeader">
            <h2>{page_title}</h2>
            {page_subheading && <h4>{page_subheading}</h4>}
        </div>
    )
}