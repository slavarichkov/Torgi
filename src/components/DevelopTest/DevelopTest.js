// компонент для тестирования функционала

function DevelopTest({ resetTimer }) {

    return (
        <div className='develop-test'>
            <h2 className='develop-test_title'> тестирование функций </h2>
            <div className='develop-test_buttoms'>
                <button className='dev_button'>Добавить участника</button>
                <button className='dev_button'>Удалить участника</button>
                <button className='dev_button' onClick={resetTimer}>Перезапустить таймер</button>
            </div>
        </div>
    )
}

export default DevelopTest;