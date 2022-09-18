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
                Eye-tracking technology for modern restaurants.
            </p>
        </div>
    )
}

export default InfoDiv