import { allProjects } from '.contentlayer/data';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import Container from 'components/container';
import ProjectCard from 'components/project-card';
import SEO from 'components/seo';

export default function ProjectPage() {
  return (
    <Container>
      <SEO title="Projects" />
      <Box py="vGutter">
        <Box>
          <Heading size="3xl" marginBottom="6">
            Selected Projects
          </Heading>
          <Text fontSize="lg" maxW="560px">
            I've been writing online since 2014, mostly about web development and tech careers.
          </Text>
        </Box>

        <Box marginTop="vGutter">
          <Stack spacing="20">
            {allProjects.map((project) => (
              <ProjectCard key={project.title} data={project} />
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
