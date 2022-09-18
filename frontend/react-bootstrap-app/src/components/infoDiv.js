import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/styles.css'

const InfoDiv = () => {
    return (
        <div style={{
            backgroundColor: 'lightblue',
            padding: '72px 20% 72px 20%'
        }}>
            {/* <h1 className='text-center title'>Ocularity</h1> */}
            <p className='text-center'>
                Eye-tracking technology for modern restaurants.
            </p>
            <p className='text-center'>
                Menus are getting increasingly extravagant with more and more items. Have so many options available can get cumbersome and may require extra money and resources to maintain. We aim to provide analytics to restaurants to see whether the extra effort in providing a large number of options is worth it.
            </p>
        </div>
    )
}

export default InfoDiv