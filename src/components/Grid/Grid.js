import { useState } from 'react';

//import ListOfParticipants from '../../utils/ListOfParticipants/ListOfParticipants'; // захардкоденный список участников
import Tenderer from './../Tenderer/Tenderer'
import Timer1 from '../../utils/Timer/Timer1';

function Grid({ timer }) {

    const [isActive, setIsActive] = useState(false)

    const ListOfParticipants = [
        {
            name: 'ООО Фирма 1',
            productionTime: '80',
            warranty: '24',
            paymentTerms: '30',
            cost: '100',
            qualityStandards: '-',
            actions: '-',
            id: '1',
            active: false,
            participantNumber: '1',
        },
        {
            name: 'ООО Фирма 2',
            productionTime: '80',
            warranty: '24',
            paymentTerms: '30',
            cost: '100',
            qualityStandards: '-',
            actions: '-',
            id: '2',
            active: true,
            participantNumber: '2',
        },
        {
            name: 'ООО Фирма 3',
            productionTime: '80',
            warranty: '24',
            paymentTerms: '30',
            cost: '100',
            qualityStandards: '-',
            actions: '-',
            id: '3',
            active: false,
            participantNumber: '3',
        },
    ]

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
                styleText={'grid_list-menu-text'}
                child={<p className='info_motion-text'>ХОД</p>}
                styleMainText = 'grid_list-title-main'
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
                    key={part.id}
                    number={<p className='grid_list-title'>`Участник № {part.participantNumber}`</p>}
                    child={part.active ? <Timer1 /> : ''}
                />
            })}

        </div >
    )
}

export default Grid;