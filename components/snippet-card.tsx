import { Snippet } from '.contentlayer/types';
import { Box } from '@chakra-ui/react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import MDXComponents from './mdx-components';

type SnippetCardProps = {
  data: Snippet;
};

export default function SnippetCard(props: SnippetCardProps) {
  const { data: snippet } = props;
  const Content = useMDXComponent(snippet.body.code);
  return (
    <Box>
      <Content components={MDXComponents} />
    </Box>
  );
}
