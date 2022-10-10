import { Box, Text, Link, Image } from '@chakra-ui/react'
import { CreatorCardType } from '../types/creatorTypes'

export const CreatorCard = ({creator}: CreatorCardType) => {
    return (
        <Box 
            p={4}
            mb={6}
            display='flex'
            borderWidth='2px' 
            borderColor='black'
            borderRadius='lg'
            width='400px'
            height='100px'
            backgroundColor={'white'}
            >
            <Box>
                <Image
                    mb={6}
                    borderRadius='full'
                    boxSize='100px'
                    width={65}
                    height={65}
                    src={creator.picture}
                    alt={creator.name}
            />
            </Box>
            <Box mt={{ md: 0 }} ml={6}>
                <Link
                    mt={1}
                    display='block'
                    fontSize='lg'
                    lineHeight='normal'
                    fontWeight='semibold'
                    href={`/creator/${creator.slug}`}
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
                </Box>
            </Box>
    )
}