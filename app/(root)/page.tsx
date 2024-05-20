import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = {firstName: 'Ransford'};
  return (
    <section className='home'>
      <div className="home-content">
        <HeaderBox 
        type="greeting"
        title="Welcome"
        user= {loggedIn?.firstName || 'Guest'}
        subtext="Access and manage your account and transactions efficiently."
        />
        <TotalBalanceBox
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1250.25}
        />
      </div>
    </section>
  )
}

export default Home