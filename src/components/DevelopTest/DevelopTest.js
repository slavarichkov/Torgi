// компонент для тестирования функционала

function DevelopTest({ resetTimer, addPart, removePart }) {

    return (
        <div className='develop-test'>
            <h2 className='develop-test_title'> тестирование функций </h2>
            <div className='develop-test_buttoms'>
                <button className='dev_button' onClick={addPart}>Добавить участника (маx 5) </button>
                <button className='dev_button' onClick={removePart}>Удалить участника (мин 1)</button>
                <button className='dev_button' onClick={resetTimer}>Перезапустить таймер</button>
            </div>
        </div>
    )
}

export default DevelopTest;