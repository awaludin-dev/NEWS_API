const Footer = () => {
    const footer = {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: 'red'
    }

    const holder = {
        color: '#fff',
        textAlign: 'center',
        padding: '6px 12px'
    }

    return(
        <footer style={footer}>
            <h3 style={holder}>©2021 Awaludin - Allright Reserved</h3>
        </footer>
    )
}

export default Footer;