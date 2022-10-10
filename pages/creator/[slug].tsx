import React from 'react';
import { Box, Text, Link, Image } from '@chakra-ui/react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { CreatorCardType } from '../../types/creatorTypes'
import { getCreatorDetails } from '../api/creators'
import styles from '../../styles/Home.module.css'

const CreatorProfile = ({ creator }: CreatorCardType) => {
    return (
      <div className={styles.main}>
        <Link href="/">
          <Image 
            src="/livelink_logo_text.svg" 
            alt="Livelink Logo" 
            width={172} 
            height={116} />
        </Link>
        <Box 
          p={4}
          mb={6}
          display='flex'
          borderWidth='2px' 
          borderColor='black'
          borderRadius='lg'
          width='400px'
          height='500px'
          backgroundColor={'white'}
          >
            <Image
              mb={6}
              borderRadius='full'
              boxSize='100px'
              width={65}
              height={65}
              src={creator.picture}
              alt={creator.name}
            />
            <Box mt={{ md: 0 }} ml={6}>
              <Link
                  mt={1}
                  display='block'
                  fontSize='lg'
                  lineHeight='normal'
                  fontWeight='semibold'
                  href={creator.slug}
                >
                <Text
                  fontWeight='bold'
                  letterSpacing='wide'
                >
                  {creator.name}
                </Text>
                </Link>
                <Text mt={2}>
                  {creator.speciality}
                </Text>
                <Text mt={2} mr={6}>
                  {creator.details}
                </Text>
              </Box>
          </Box>
        <footer className={styles.footer}>
            <a
                href="https://livelink.vip"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <span className={styles.logo}>
                <Image src="/livelink_logo_text.svg" alt="Livelink Logo" width={90} height={35} />
                </span>
            </a>
            </footer>
      </div>
    );
};

export default CreatorProfile;

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await fetch('http://localhost:3000/api/creators')
    const creators = await data.json()

    const newPaths = [];

    for (let slug of creators) {
      newPaths.push({ params: { ...slug } });
    }

    return {
        paths: newPaths,
        fallback: true
    };
}

export const getStaticProps: GetStaticProps = (context) => {
  const params = context.params?.slug
  const creator = getCreatorDetails(params)
  return {
      props: { creator },
  };
}