import ListOfParticipants from '../../utils/ListOfParticipants/ListOfParticipants'; // захардкоденный список участников
import Tenderer from './../Tenderer/Tenderer'

function Grid() {

    return (
        <div className='grid'>
            {/* информация для заполнения участников */}
          
                <Tenderer
                    name={'Параметры и требования'}
                    qualityStandards={'Наличие комплекса мероприятий, повышающих стандарты качества изготовления '}
                    productionTime={'Срок изготовления лота, дней'}
                    warranty={'Гарантийные обязательства, мес'}
                    paymentTerms={'Условия оплаты'} cost={'Стоимость изготовления лота, руб ( без НДС)'}
                    actions={'Действия:'} />


        </div >
    )
}

export default Grid;