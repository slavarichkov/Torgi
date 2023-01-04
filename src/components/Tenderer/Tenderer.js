
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
    child
}) {
    return (
        <div className={`grid_list ${styleText}`} id={id}>
            <div className='grid_list-container'>
                <div>{child}</div>
                <h3 className={`grid_list-title ${styleText}`}>{name}</h3>
            </div>
            <p className={`grid_list-text grid_list-color ${styleText}`}>{qualityStandards}</p>
            <p className={`grid_list-text ${styleText}`}>{productionTime}</p>
            <p className={`grid_list-text grid_list-color ${styleText}`}>{warranty}</p>
            <p className={`grid_list-text ${styleText}`}>{paymentTerms}</p>
            <p className={`grid_list-text grid_list-color ${styleText}`}>{cost}</p>
            <p className={`grid_list-text ${styleText}`}>{actions}</p>
        </div >
    )
}

export default Tenderer
