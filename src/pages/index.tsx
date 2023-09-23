import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import DenseAppBar from '@/components/navbar/Navbar'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client';
import { GET_LAUNCHES } from './queries'
import ActionAreaCard from '@/components/body/Body'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { loading, error, data } = useQuery(GET_LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error('Error fetching data:', error);
    return <p>Error fetching data</p>;
  }


  const filteredShips = data.ships.filter((ship) => ship.image !== null && ship.name !== null);
  console.log(filteredShips)

  return (
    <>
      <DenseAppBar />
      <div className={styles.main}>
        {filteredShips.map((ship, index) => (
          <ActionAreaCard key={index} image={ship.image} name={ship.name} />

        ))}
      </div>
    </>
  )
}
