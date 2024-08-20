
import '../App.css'
import { Button } from 'react-bootstrap'
import '../Components/Home.css'


const Home = () => {
    
  return (
    <div>
    <div className='hero-container'>
        <h1>Indrajalaa Legal</h1>
        <p>Explore our policies and learn more about our commitment <br /> to providing a safe and enjoyable experience.</p>
    </div>

    <div className='main'>
        <section>
           <div className='container'>
            <br /> <br />
            <div className='cards'>
                <div className='card'>
                    <h3 style={{textAlign:'center'}}>Account Delection</h3>
                    <Button variant="primary">Click Here</Button>
                </div>
                <div className='card'>
                <h3 style={{textAlign:'center'}}>Child Protection</h3>
                    <Button variant="primary">Click Here</Button>
                </div>
                <div className='card'>
                <h3 style={{textAlign:'center'}}>Data & Privacy Policy</h3>
                    <Button variant="primary">Click Here</Button>
                </div>
            </div>

            <div className='cards'>
                <div className='card'>
                <h3 style={{textAlign:'center'}}>Age Restrictions</h3>
                    <Button variant="primary">Click Here</Button>

                </div>
                
                <div className='card'>
                <h3 style={{textAlign:'center'}}>Content Removal</h3>
                    <Button variant="primary">Click Here</Button>

                </div>

                <div className='card'>
                <h3 style={{textAlign:'center'}}>Refund Policy</h3>
                    <Button variant="primary">Click Here</Button>

                </div>
            </div>

            <div className='cards'>
                <div className='card'>
                <h3 style={{textAlign:'center'}}>Broken links</h3>
                    <Button variant="primary">Click Here</Button>
                </div>
                <div className='card'>
                <h3 style={{textAlign:'center'}}>Cookie Policy</h3>
                    <Button variant="primary" href='/Privacy'>Click Here</Button>

                </div>
                
                <div className='card'>
                <h3 style={{textAlign:'center'}}>Subscription Policy</h3>
                    <Button className='btn' href='/Policies'>Click Here</Button>
                </div>

                <div className='card'>
                <h3 style={{textAlign:'center'}}>Cancellation Policy</h3>
                    <Button className='btn' href='/Policies'>Click Here</Button>
                </div>

                <div className='card'>
                <h3 style={{textAlign:'center'}}>Copyright Policy</h3>
                    <Button className='btn' href='/Policies'>GClick Here</Button>
                </div>

                <div className='card'>
                <h3 style={{textAlign:'center'}}>Terms for Usage</h3>
                    <Button className='btn' href='/Policies'>Click Here</Button>
                </div>

                <div className='card' style={{marginLeft:'140px'}}>
                <h3 style={{textAlign:'center'}}>User Conduct</h3>
                    <Button className='btn' href='/Policies'>Click Here</Button>
                </div>

                <div className='card' style={{marginRight:'140px'}}>
                <h3 style={{textAlign:'center'}}>Contacts</h3>
                    <Button className='btn' href='/Policies'>Click Here</Button>
                </div>
            </div>

           </div>
        </section>
    </div>

    </div>
   
  )
}

export default Home