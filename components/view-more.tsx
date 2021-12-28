import { HStack, Text, useToken } from '@chakra-ui/react';
import Link from 'next/link';

function ArrowRightIcon() {
  const sageBase = useToken('colors', 'sage.base');
  return (
    <svg width="23" height="19" viewBox="0 0 23 19">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0607 1.43932L13 0.378662L10.8787 2.49998L11.9393 3.56064L16.3787 7.99998H0V11H16.3787L11.9393 15.4393L10.8787 16.5L13 18.6213L14.0607 17.5606L21.0607 10.5606L22.1213 9.49998L21.0607 8.43932L14.0607 1.43932Z"
        fill={sageBase}
      />
    </svg>
  );
}

export default function ViewMore({ children, href = '#' }) {
  return (
    <Link href={href} passHref>
      <HStack as="a" display="inline-flex">
        <Text fontWeight={'bold'} color="sage.base">
          {children}
        </Text>
        <ArrowRightIcon />
      </HStack>
    </Link>
  );
}
