/* eslint-disable jsx-a11y/no-distracting-elements */
const Header = () => {
    const header = {
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'red'
    }

    const marquee = {
        padding: '6px 12px',
        color: '#fff',
        textTransform: 'uppercase'
    }

    const span = {
        color: 'yellow',
        textTransform: 'uppercase'
    }

    return(
        <header style={header}>
            <marquee style={marquee}><span style={span}>warning!!!</span> web app to display popoular news or search news by keyword <span style={span}>warning!!!</span></marquee>
        </header>
    )
}

export default Header;