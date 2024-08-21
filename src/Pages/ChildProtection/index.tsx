import React from 'react';
import './index.css';

const ChildProtection: React.FC = () => {
  return (
    <>
      {/* <main style={{ padding: '1rem', background: ''}}>
        <h1 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: 'calc(15px + 2vw)' }}>
        CHILD PROTECTION
        </h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <p style={{ margin: 0 }}>Time to Read: 3 Minutes Estimated</p>
          <p style={{ margin: 0 }}>Last Modified: 09th Aug 2024</p>
        </div> */}
        <main>
          <h1>CHILD PROTECTION</h1>
          <div className='info-container'>
            <p>Time to Read: 3 Minutes Estimated</p>
            <p>Last Modified: 09th Aug 2024</p>
          </div>
          <section className='child'>
        <section>
          <h2>About Our Policy</h2>
          <p>
          At Indrajala Movie Makers, we prioritize the safety and well-being of our viewers, especially minors. Our platforms, including the Indrajala website and application, feature content that is categorized as 18+ (adult category). We do not promote or endorse access to our services by individuals under the age of 18. It is our responsibility to ensure that our content is appropriate for mature audiences only. We encourage parents and guardians to monitor their children's online activities and to take an active role in determining the suitability of the content they consume. By accessing our platform, users affirm that they are at least 18 years old and agree to comply with our child protection policy.
          </p>
         </section>

        <section>
          <h2>Regarding Users Below 18</h2>
          <p>
          In the event that we discover an account belongs to a minor, we will take immediate action to remove that account without exception. This policy is in place to protect the integrity of our platform and the well-being of younger audiences. Users whose accounts are removed due to age restrictions will not be eligible for any refunds or benefits associated with their subscription. We appreciate your understanding and cooperation in helping us maintain a responsible and safe platform for all our users.
          </p>
          </section>

          <section>
          <h2>Closing Statement</h2>
          <p>
          n conclusion, Indrajala is dedicated to providing a safe and responsible viewing environment, and we do not permit access to our platforms by users classified as minors, specifically those under the age of 18. Our content is intended for mature audiences only, and we will not entertain any inquiries or requests from individuals who do not meet this age requirement.
          </p>

          <p>
          In any circumstance where we determine that a user is not eligible due to being below the specified age group, their account will be deleted without further notice or concern.
          Thank you for choosing Indrajala. We look forward to serving you with exceptional fantasy content that captivates and inspires!
          </p>

          </section>
          </section>
      </main>
    </>
  );
};

export default ChildProtection;
