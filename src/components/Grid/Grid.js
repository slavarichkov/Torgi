import { useEffect } from 'react';

import ListOfParticipants from '../../utils/ListOfParticipants/ListOfParticipants'; // захардкоденный список участников
import Tenderer from './../Tenderer/Tenderer'
import Timer from '../../utils/Timer/Timer'; // Таймер

function Grid({ resetTimer, addParticipants, removeParticipants }) {

    const testNewParticip = { // захардкоденный новый участник 
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

    function divideNumberByPieces(x, delimiter) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter || " ");
    }

    useEffect(() => {
        if (addParticipants && ListOfParticipants.length < 5) {
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
            {/* информация для заполнения участников, отрисовать из компонента tenderer */}
            <Tenderer
                name={'Параметры и требования'}
                qualityStandards={'Наличие комплекса мероприятий, повышающих стандарты качества изготовления '}
                productionTime={'Срок изготовления лота, дней'}
                warranty={'Гарантийные обязательства, мес'}
                paymentTerms={'Условия оплаты'}
                cost={'Стоимость изготовления лота, руб ( без НДС)'}
                actions={'Действия:'}
                styleText={'tenderer_list-menu-text'} // стиль текста меню таблицы
                child={<p className='info_motion-text'>ХОД</p>}
                styleTitleText='tenderer_list-title-main' // стиль текста надписи "параметры и требования"
                styleCostTitleText='tenderer_list-cost-title' // стиль текста цены
            />
            {/* отрисовать участников ( можно получать с сервера) */}
            {ListOfParticipants.map((part) => {
                return <Tenderer
                    name={part.name}
                    qualityStandards={part.qualityStandards}
                    productionTime={part.productionTime}
                    warranty={part.warranty}
                    paymentTerms={part.paymentTerms}
                    cost={divideNumberByPieces(part.cost, ',') + ' руб'}
                    actions={part.actions}
                    key={part.id}
                    number={<p className='tenderer_list-title'>`Участник № {part.participantNumber}`</p>}
                    child={part.active ? <Timer resetInstalled={resetTimer} /> : ''}
                    styleCostTitleText={'tenderer_list-text-coast-title_color'}
                    costDiscount=
                    {
                        <p className={`tenderer_list-text tenderer_list-color tenderer_list-text-coast-discount_color`}>
                            {part.costDiscount ? '- ' + divideNumberByPieces(part.costDiscount, ',') + ' руб' : ''}
                        </p>
                    }
                    totalCost=
                    {
                        <p className={`tenderer_list-text tenderer_list-color tenderer_list-text-coast-costTotal_color`}>
                            {part.costTotal ? divideNumberByPieces(part.costTotal, ',') + ' руб' : ''}
                        </p>
                    }
                />
            })}

        </div >
    )
}

export default Grid;