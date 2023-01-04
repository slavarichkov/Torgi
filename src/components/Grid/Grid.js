import { useEffect } from 'react';

import ListOfParticipants from '../../utils/ListOfParticipants/ListOfParticipants'; // захардкоденный список участников
import Tenderer from './../Tenderer/Tenderer'
import Timer1 from '../../utils/Timer/Timer1'; // Таймер

function Grid({ resetTimer, addParticipants, removeParticipants }) {

    const testNewParticip = {
        name: 'ООО Фирма',
        productionTime: '80',
        warranty: '24',
        paymentTerms: '30',
        cost: '100',
        qualityStandards: '-',
        actions: '-',
        id: '',
        active: false,
        participantNumber: '',
    }

    useEffect(() => {
        if (addParticipants && ListOfParticipants.length < 5) {
            console.log(1);
            testNewParticip.id = ListOfParticipants.length + 1;
            testNewParticip.participantNumber = ListOfParticipants.length + 1;
            ListOfParticipants.push(testNewParticip)
        } else if (removeParticipants && ListOfParticipants.length > 1) {
            let index = ListOfParticipants.length;
            let activeParticipantsIndex = ListOfParticipants.findIndex((part) => part.active === true)
            console.log(activeParticipantsIndex)
            ListOfParticipants.splice(activeParticipantsIndex === index - 1 ? index - 2 : index - 1, 1);
        }
    }, [addParticipants, removeParticipants])



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
                styleMainText='grid_list-title-main'
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
                    child={part.active ? <Timer1 resetInstalled={resetTimer} /> : ''}
                />
            })}

        </div >
    )
}

export default Grid;