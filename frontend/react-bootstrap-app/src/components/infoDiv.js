import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/styles.css'

const InfoDiv = () => {
    return (
        <div style={{
            backgroundColor: 'lightblue',
            padding: '72px'
        }}>
            <h1 className='text-center title'>Ocularity</h1>
            <p className='text-center'>
                With restaurant menus getting larger and featuring more extravagant items, we would like to see if it is worth the effort maintain them using eye-tracking technology.
            </p>
        </div>
    )
}

export default InfoDiv