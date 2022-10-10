import { Box, Text, Link, Image } from '@chakra-ui/react'

type CreatorCardProps = {
    creator: {
        name: string,
        speciality: string,
        profile: string
    }
}

export const CreatorCard = ({creator}: CreatorCardProps) => {
    return (
    <Box 
        p={4}
        mb={6}
        display={{ md: 'flex' }} 
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
            src='/justina.png'
            alt={creator.name}
        />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Link
            mt={1}
            display='block'
            fontSize='lg'
            lineHeight='normal'
            fontWeight='semibold'
            href={creator.profile}
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