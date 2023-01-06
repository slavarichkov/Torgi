
function Tenderer({
    name,
    qualityStandards,
    productionTime,
    warranty,
    paymentTerms,
    cost,
    actions,
    styleText,
    id,
    child,
    number,
    styleTitleText,
    costDiscount,
    totalCost,
    styleCostTitleText,
}) {

    return (
        <div className={`tenderer_list ${styleText}`} id={id}>
            <div className='tenderer_list-container'>
                <div>
                    {number}
                    <h3 className={`tenderer_list-title ${styleText} ${styleTitleText}`}>{name}</h3>
                </div>
                {child}
            </div>
            <p className={`tenderer_list-text tenderer_list-color ${styleText}`}>{qualityStandards}</p>
            <p className={`tenderer_list-text ${styleText}`}>{productionTime}</p>
            <p className={`tenderer_list-text tenderer_list-color ${styleText}`}>{warranty}</p>
            <p className={`tenderer_list-text ${styleText}`}>{paymentTerms}</p>
            <div className={`tenderer_list-container-coast `}>
                <p className={`tenderer_list-text tenderer_list-color ${styleText} ${styleCostTitleText}`}>
                    {cost}
                </p>
                {costDiscount}
                {totalCost}
            </div>
            <p className={`tenderer_list-text ${styleText}`}>{actions}</p>
        </div >
    )
}

export default Tenderer
