
function Tenderer({ name, qualityStandards, productionTime, warranty, paymentTerms, cost, actions }) {
    return (
        <div className='grid_list'>
            <h3 className='grid_list-title '>{name}</h3>
            <p className='grid_list-text grid_list-color'>{qualityStandards}</p>
            <p className='grid_list-text'>{productionTime}</p>
            <p className='grid_list-text grid_list-color'>{warranty}</p>
            <p className='grid_list-text'>{paymentTerms}</p>
            <p className='grid_list-text grid_list-color'>{cost}</p>
            <p className='grid_list-text'>{actions}</p>
        </div>
    )
}

export default Tenderer
