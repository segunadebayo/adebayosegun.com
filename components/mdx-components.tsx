import { chakra } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ChakraLink = React.forwardRef<HTMLAnchorElement, any>(function ChakraLink(props, ref) {
  return (
    <chakra.a
      ref={ref}
      color="white"
      fontWeight="semibold"
      textDecor="underline"
      textUnderlineOffset="6px"
      textDecorationColor="brown.700"
      _hover={{ bg: 'gray.700' }}
      {...props}
    />
  );
});

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <ChakraLink {...props} />
      </Link>
    );
  }

  return <ChakraLink target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents: Record<string, React.FC<any>> = {
  a: CustomLink,
  ul(props) {
    return <chakra.ul paddingStart="4" marginY="5" {...props} />;
  },
  ol(props) {
    return <chakra.ul paddingStart="4" marginY="5" {...props} />;
  },
  li(props) {
    return <chakra.li marginY="2" sx={{ '&::marker': { color: 'brown.600' } }} {...props} />;
  },
  h2(props) {
    return (
      <chakra.h2
        lineHeight="1.5em"
        fontSize="2xl"
        fontFamily="heading"
        fontWeight="semibold"
        marginTop="8"
        marginBottom="4"
        {...props}
      />
    );
  },
  h3(props) {
    return (
      <chakra.h3
        lineHeight="1.5em"
        fontSize="xl"
        fontFamily="heading"
        fontWeight="semibold"
        marginTop="8"
        marginBottom="4"
        {...props}
      />
    );
  },
  blockquote(props) {
    return (
      <chakra.blockquote
        color="white"
        marginY="8"
        paddingX="6"
        paddingY="4"
        marginX="-6"
        bg="gray.800"
        sx={{ borderLeft: '4px solid', borderColor: 'brown.600' }}
        {...props}
      />
    );
  },
  Image(props) {
    return <Image alt={props.alt} className="img" {...props} />;
  },
  hr(props) {
    return <chakra.hr borderColor="whiteAlpha.100" marginY="3em" {...props} />;
  },
  code(props) {
    if (typeof props.children === 'string') {
      return <chakra.code color="brown.600" rounded="sm">{`\`${props.children}\``}</chakra.code>;
    }
    return <code {...props} />;
  },
  strong(props) {
    return <chakra.strong fontWeight="semibold" color="white" {...props} />;
  },
  table(props) {
    return (
      <chakra.table
        marginY="10"
        width="full"
        sx={{
          borderCollapse: 'collapse',
          thead: {
            borderBottomWidth: '1px',
            borderBottomColor: 'gray.700',
            th: {
              textAlign: 'start',
              padding: '2',
              verticalAlign: 'bottom',
              color: 'gray.200',
            },
          },
          tbody: {
            tr: {
              borderBottomWidth: '1px',
              borderBottomColor: 'gray.800',
            },
            td: {
              padding: '2',
            },
          },
        }}
        {...props}
      />
    );
  },
};

export default MDXComponents;
