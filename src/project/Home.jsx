import './css/Home.css'

export const Home = () => {
    return <>
        <div>
            <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} className='logo' alt="logo" />
            <h2> ...האתר בשלבי פיתוח</h2>
            <h1><a href='https://github.com/NpmStart2' target="_blank">Github</a> מפתחים? עקבו אחרינו ב </h1>
            <h2 className='handwritting'><a href='mailto:npmstart2@gmail.com'>npmstart2@gmail.com</a> ג'ונרית? רוצה להיות חלק מהצוות המוביל? צרי איתנו קשר  </h2>
        </div>
    </>
}
