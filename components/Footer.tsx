import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
    useBreakpointValue,
    Icon,
} from '@chakra-ui/react';
import IconButtonLink from './IconButtonLink';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
    const buttonSize = useBreakpointValue(['sm', 'md', 'lg']);
    return (
        <Box mt="5rem">
            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}
                >
                    <Text>
                        © {new Date().getFullYear()} DevAzz. All rights reserved
                    </Text>
                    <Stack direction={'row'} spacing={6}>
                        <IconButtonLink
                            href="https://twitter.com/reactdevjnr"
                            target="_blank"
                            aria-label="Twitter"
                            variant="ghost"
                            ml={['2', '4']}
                            size={buttonSize}
                        >
                            <BsTwitter />
                        </IconButtonLink>
                        <IconButtonLink
                            href="https://www.linkedin.com/in/arslaan-qadus/"
                            target="_blank"
                            aria-label="LinkedIn"
                            variant="ghost"
                            ml={['2', '4']}
                            size={buttonSize}
                        >
                            <BsLinkedin />
                        </IconButtonLink>
                        <IconButtonLink
                            href="https://github.com/azy2k9"
                            target="_blank"
                            aria-label="Github"
                            variant="ghost"
                            ml={['2', '4']}
                            size={buttonSize}
                        >
                            <BsGithub />
                        </IconButtonLink>
                        <IconButtonLink
                            href="mailto:azy2k9@gmail.com?subject=Hey! I just saw your personal website!"
                            target="_blank"
                            aria-label="Mail"
                            variant="ghost"
                            ml={['2', '4']}
                            size={buttonSize}
                        >
                            <Icon as={HiMail} fontSize="x-large" />
                        </IconButtonLink>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
