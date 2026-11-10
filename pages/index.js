import Head from 'next/head';
import {
  Box, Button, Container, Flex, Heading, HStack, Image, SimpleGrid,
  Stack, Text, VStack
} from '@chakra-ui/react';

// EDIT THE SETTINGS BELOW to update the booking link and TikTok videos.
const site = {
  name: 'P.PRODUCTIONS',
  tagline: 'PROFESSIONAL SOUND. REAL RESULTS.',
  calendarUrl: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3K-OkEXeCPd0nMud45ct_7Zkop7YktPZNqUyynKRtpB5ikGWa71_ilJnrvGzh9XSUj0pQOPsJq',
  tiktokUrl: 'https://www.tiktok.com/@p.productions8',
  logo: '/logo-original.png',
  pricing: [
    { title: 'RECORDING', subtitle: 'WITH ENGINEER', price: '£25', unit: 'PER HOUR', detail: '4 HOUR SESSION', offer: 'GET 1 HOUR FREE', description: 'Professional recording with an engineer to help bring your sound to life.' },
    { title: 'DRY HIRE', subtitle: 'NO ENGINEER · RECORD OR KICKBACK SPACE', price: '£20', unit: 'PER HOUR', detail: '9 HOUR BLOCK OFFER', offer: '£100', featured: true, description: 'Use the studio your way. Perfect for independent artists and creative sessions.' },
    { title: 'MIX & MASTER', subtitle: 'POLISHED, RELEASE-READY SOUND', price: '£80', unit: 'PER TRACK', detail: 'MIXING & MASTERING', offer: 'BRING YOUR MUSIC TO LIFE', description: 'Give your track clarity, balance and the finish it deserves.' }
  ],
  tiktokPosts: [{ id: '7697659435119906070', caption: 'Latest from P.PRODUCTIONS' }]
};

const pink = '#ed45f5';
const purple = '#8d24ff';

function SectionTitle({ eyebrow, title, description }) {
  return (
    <VStack align="start" gap={3} mb={9}>
      <Text color={pink} fontSize="xs" fontWeight="800" letterSpacing="0.25em">{eyebrow}</Text>
      <Heading fontSize={{ base: '3xl', md: '5xl' }} letterSpacing="-0.045em">{title}</Heading>
      {description && <Text color="whiteAlpha.700" maxW="620px" lineHeight="1.8">{description}</Text>}
    </VStack>
  );
}

export default function Home() {
  const posts = site.tiktokPosts.filter(post => post.id);
  return (
    <>
      <Head>
        <title>P.PRODUCTIONS | Studio bookings</title>
        <meta name="description" content="P.PRODUCTIONS — professional recording, dry hire and mix & mastering. Book your studio session." />
        <meta name="theme-color" content="#08040c" />
      </Head>
      <Box bg="#08040c" color="white" minH="100vh" overflow="hidden">
        <Box position="absolute" inset="0 0 auto" h="760px" pointerEvents="none" opacity=".55" bg="radial-gradient(ellipse at 50% 0%, rgba(141,36,255,.28), transparent 62%)" />
        <Container maxW="1200px" px={{ base: 5, md: 8 }} position="relative">
          <Flex minH={{ base: '88vh', md: '94vh' }} direction="column" align="center" justify="center" textAlign="center" py={14}>
            <Image src={site.logo} alt="P.PRODUCTIONS logo" w={{ base: 'min(100%, 390px)', md: '470px' }} maxH="340px" objectFit="contain" />
            <Text mt={7} color={pink} letterSpacing=".32em" fontSize={{ base: 'xs', md: 'sm' }} fontWeight="800">{site.tagline}</Text>
            <Heading mt={5} maxW="900px" fontSize={{ base: '4xl', sm: '5xl', md: '7xl' }} lineHeight=".98" letterSpacing="-.06em">YOUR SOUND. <Box as="span" color={pink}>YOUR MOMENT.</Box></Heading>
            <Text mt={6} color="whiteAlpha.750" fontSize={{ base: 'md', md: 'lg' }} maxW="560px" lineHeight="1.8">Recording, studio hire and mix & mastering. A space to create, experiment and bring your music to life.</Text>
            <Button as="a" href={site.calendarUrl} target="_blank" rel="noreferrer" mt={9} h="60px" px={10} bg={pink} color="white" borderRadius="full" fontWeight="900" letterSpacing=".12em" boxShadow={`0 0 32px ${pink}55`} _hover={{ bg: '#ff72ff', transform: 'translateY(-3px)' }} transition="all .2s">BOOK NOW <Box as="span" ml={3}>↗</Box></Button>
            <Text mt={4} color="whiteAlpha.500" fontSize="xs">EST. 2023 · SELECT YOUR SLOT ONLINE</Text>
            <Text mt={12} color="whiteAlpha.400" fontSize="xs" letterSpacing=".22em">SCROLL TO EXPLORE ↓</Text>
          </Flex>

          <Box py={{ base: 16, md: 24 }} borderTop="1px solid" borderColor="whiteAlpha.200">
            <SectionTitle eyebrow="STUDIO SERVICES" title="FIND YOUR SOUND" description="Choose the session that suits your next project. Straightforward pricing, professional sound and a great studio atmosphere." />
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={5}>
              {site.pricing.map((plan) => (
                <Box key={plan.title} p={{ base: 7, md: 8 }} bg={plan.featured ? 'linear-gradient(160deg, #24102d, #120b18)' : '#100b14'} border="1px solid" borderColor={plan.featured ? pink : '#713078'} borderRadius="2xl" position="relative" boxShadow={plan.featured ? `0 0 30px ${pink}20` : 'none'}>
                  {plan.featured && <Text color={pink} fontSize="xs" fontWeight="900" letterSpacing=".16em" mb={4}>BEST VALUE</Text>}
                  <Text color={pink} fontSize="xs" fontWeight="900" letterSpacing=".2em">{plan.title}</Text>
                  <Text mt={2} minH="42px" color="whiteAlpha.650" fontSize="xs" fontWeight="bold" letterSpacing=".08em">{plan.subtitle}</Text>
                  <Heading mt={5} fontSize="5xl" letterSpacing="-.06em">{plan.price}</Heading>
                  <Text mt={1} color="whiteAlpha.700" fontSize="xs" letterSpacing=".2em">{plan.unit}</Text>
                  <Text mt={5} minH="76px" color="whiteAlpha.700" fontSize="sm" lineHeight="1.7">{plan.description}</Text>
                  <Box h="1px" bg="whiteAlpha.200" my={5} />
                  <Box border="1px dashed" borderColor={pink} borderRadius="lg" p={4} textAlign="center">
                    <Text color="whiteAlpha.700" fontSize="xs" fontWeight="bold" letterSpacing=".1em">{plan.detail}</Text>
                    <Text mt={1} color={pink} fontSize="xl" fontWeight="900">{plan.offer}</Text>
                  </Box>
                  <Button as="a" href={site.calendarUrl} target="_blank" rel="noreferrer" mt={7} w="full" borderRadius="full" bg={pink} color="white" fontWeight="800" _hover={{ bg: '#ff72ff' }}>BOOK THIS SERVICE ↗</Button>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Box py={{ base: 16, md: 24 }} borderTop="1px solid" borderColor="whiteAlpha.200">
            <SectionTitle eyebrow="THE EXPERIENCE" title="BUILT FOR CREATIVITY" description="High-quality sound, a professional engineer, a great atmosphere and the space to bring your music to life." />
            <SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
              {['HIGH QUALITY SOUND', 'PROFESSIONAL ENGINEER', 'GREAT ATMOSPHERE', 'BRING YOUR MUSIC TO LIFE'].map((item, i) => (
                <VStack key={item} py={5} px={2} textAlign="center" borderRight={{ base: i % 2 === 0 ? '1px solid #713078' : 'none', md: i < 3 ? '1px solid #713078' : 'none' }}>
                  <Text color={pink} fontSize="3xl">{['♫', '◉', '☷', '◇'][i]}</Text>
                  <Text fontSize="xs" fontWeight="bold" letterSpacing=".1em" lineHeight="1.7">{item}</Text>
                </VStack>
              ))}
            </SimpleGrid>
          </Box>

          <Box as="section" id="tiktok" width="100%" py={{ base: 16, md: 24 }} borderTop="1px solid" borderColor="whiteAlpha.200">
            <VStack width="100%" align="center" textAlign="center" gap={4} mb={12}>
              <Text color={pink} fontSize="xs" fontWeight="900" letterSpacing="0.3em">FOLLOW THE JOURNEY</Text>
              <Heading fontSize={{ base: "3xl", md: "5xl" }} letterSpacing="-0.04em">LATEST FROM THE STUDIO</Heading>
              <Text color="whiteAlpha.700" fontSize="md" maxW="500px" lineHeight="1.8">Behind the scenes, recording sessions, studio life and recent work from P.PRODUCTIONS.</Text>
              <Button as="a" href={site.tiktokUrl} target="_blank" rel="noopener noreferrer" mt={4} px={8} h="54px" bg="transparent" color="white" border="1px solid #ed45f5" borderRadius="full" fontWeight="bold" letterSpacing="0.06em" _hover={{ bg: pink, color: "white", boxShadow: "0 0 25px #ed45f555" }}>TIKTOK @P.PRODUCTIONS8 ↗</Button>
            </VStack>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} width="100%" maxW="1100px" mx="auto" justifyItems="center" alignItems="start">
              {posts.map((post) => (
                <Box key={post.id} width="100%" maxW="325px" mx="auto" bg="#100b14" border="1px solid" borderColor="#713078" borderRadius="20px" overflow="hidden" boxShadow="0 0 25px rgba(237,69,245,0.08)" transition="all 0.3s ease" _hover={{ borderColor: pink, transform: "translateY(-5px)", boxShadow: "0 0 30px rgba(237,69,245,0.18)" }}>
                  <Box width="100%" aspectRatio="9 / 16" bg="#08040c" position="relative" overflow="hidden">
                    <iframe title={post.caption || "P.PRODUCTIONS TikTok"} src={`https://www.tiktok.com/embed/v2/${post.id}`} width="100%" height="100%" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", display: "block" }} allow="encrypted-media; fullscreen" allowFullScreen />
                  </Box>
                  <Box p={4} textAlign="center" borderTop="1px solid" borderColor="whiteAlpha.100"><Text color="white" fontSize="sm" fontWeight="600">{post.caption}</Text></Box>
                </Box>
              ))}
            </SimpleGrid>
            <Flex justify="center" mt={12}>
              <Button as="a" href={site.tiktokUrl} target="_blank" rel="noopener noreferrer" variant="outline" borderColor="#713078" color="white" borderRadius="full" px={8} _hover={{ borderColor: pink, color: pink }}>VIEW MORE ON TIKTOK ↗</Button>
            </Flex>
          </Box>

          <Box py={{ base: 16, md: 24 }} textAlign="center" borderTop="1px solid" borderColor="whiteAlpha.200">
            <Image src={site.logo} alt="P.PRODUCTIONS" w="210px" maxH="150px" objectFit="contain" mx="auto" />
            <Text mt={5} color={pink} fontSize="xs" fontWeight="800" letterSpacing=".24em">READY TO MAKE SOMETHING?</Text>
            <Heading mt={3} fontSize={{ base: '3xl', md: '5xl' }}>BOOK YOUR SESSION.</Heading>
            <Button as="a" href={site.calendarUrl} target="_blank" rel="noreferrer" mt={7} h="56px" px={9} bg={pink} color="white" borderRadius="full" fontWeight="900" _hover={{ bg: '#ff72ff' }}>BOOK NOW ↗</Button>
          </Box>
          <Flex py={7} borderTop="1px solid" borderColor="whiteAlpha.200" justify="center" color="whiteAlpha.500" fontSize="xs" letterSpacing=".12em">
            <Text>© {new Date().getFullYear()} P.PRODUCTIONS · EST. 2023</Text>
          </Flex>
        </Container>
      </Box>
    </>
  );
}