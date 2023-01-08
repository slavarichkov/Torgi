import Time from '../../utils/DateAndTime/DateAndTime' // импорт даты и времени

function Header({ title, subtitle }) {
    return (
        <header className="header">
            <h2 className='header_title'>{title}</h2>
            <p className='header_text'>{subtitle}</p>
            <Time />
        </header>

    );
}

export default Header;