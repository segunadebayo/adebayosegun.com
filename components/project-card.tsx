import { Project } from '.contentlayer/types';
import { Box, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { DescriptionList } from './description-item';
import LinkItem from './link-item';
import { GithubIcon, WebsiteIcon } from './social-icons';

type ProjectCardProps = {
  data: Project;
};

export default function ProjectCard(props: ProjectCardProps) {
  const { data: project } = props;
  const Component = useMDXComponent(project.body.code);
  return (
    <Flex gap="20" direction={{ base: 'column', md: 'row' }}>
      <Box maxW={{ md: '440px' }} flex="1">
        <Stack spacing="6">
          <Heading color="#F7B590" letterSpacing="-0.03em">
            {project.title}
          </Heading>
          <HStack spacing="12">
            {project.github && (
              <LinkItem icon={GithubIcon} href={project.github}>
                Github
              </LinkItem>
            )}
            {project.website && (
              <LinkItem icon={WebsiteIcon} href={project.website}>
                Website
              </LinkItem>
            )}
          </HStack>
          <Box fontSize="lg">
            <Component />
          </Box>
        </Stack>

        <Box mt="12">
          <DescriptionList data={project.metadata} />
        </Box>
      </Box>

      <ProjectImageCard src="/" />
    </Flex>
  );
}

function ProjectImageCard({ src }: { src?: string }) {
  return (
    <Box
      flex={{ md: '1' }}
      position="relative"
      height="400px"
      width="100%"
      overflow="hidden"
      bg="linear-gradient(180deg, #FEB48C 0%, #1EBBFF 100%);"
      rounded="2xl"
    >
      <Box
        position="absolute"
        left="10"
        top="10"
        width="900px"
        height="500px"
        bg="white"
        rounded="lg"
        overflow="hidden"
        boxShadow="xl"
      ></Box>
    </Box>
  );
}
