import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Flex, Heading, IconButton, Link, Text, useColorMode } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  let headerText = "Endereços";

  if (location.pathname === '/add') {
    headerText = "Adicione um Novo Endereço";
  } else if (location.pathname.startsWith('/edit/')) {
    headerText = "Editar Endereço";
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex direction="column" minH="100vh" w={'100%'} position={'relative'}>
      <Box bg="purple.500" color="white" px={4}  py={3}>
        <Container maxW="container.xl">
          <Heading as="h1" size="lg">{headerText}</Heading>
          
        </Container>
        <Button position={'absolute'} _hover={{}} right={4} top={3} onClick={toggleColorMode} variant="ghost">
            {colorMode === 'light' ? <MoonIcon boxSize={7} color={'white'} /> : <SunIcon boxSize={7} />}
          </Button>
      </Box>

      <Container maxW="container.lg" flex="1" py={5}>
        <Outlet />
      </Container>

      <Box bg="gray.700" color="gray.200" px={4} py={3}>
        <Container maxW="container.xl" textAlign="center">
          <Text>&copy; {new Date().getFullYear()} Aplicativo para teste tecnico da empresa Beyond the Bytes </Text>
          <Text>Desenvolvido por <Link href="https://www.linkedin.com/in/jaceguai-junior/" color="purple.300" isExternal>Jaceguai Júnior</Link></Text>
        </Container>
      </Box>
    </Flex>
  );
}

export default Layout;
