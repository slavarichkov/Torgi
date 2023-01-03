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
                paymentTerms={'Условия оплаты'}
                cost={'Стоимость изготовления лота, руб ( без НДС)'}
                actions={'Действия:'}
            />
            {/* отрисовать участников ( можно получать с сервера) */}
            {ListOfParticipants.map((part) => {
                return <Tenderer
                    name={part.name}
                    qualityStandards={part.qualityStandards}
                    productionTime={part.productionTime}
                    warranty={part.warranty}
                    paymentTerms={part.paymentTerms}
                    cost={part.cost}
                    actions={part.actions}
                />

            })}

        </div >
    )
}

export default Grid;