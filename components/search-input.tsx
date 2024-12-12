import { AbsoluteCenter, chakra, Flex, Icon, mergeRefs } from '@chakra-ui/react'
import useElementState from 'lib/use-element-state'
import useSearchParams from 'lib/use-search-params'
import { useRef } from 'react'
import { CloseIcon } from './nav-icons'

function SearchIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <path
        d='M22.0001 22L15.6561 15.656'
        stroke='currentColor'
        strokeWidth='2'
        strokeMiterlimit='10'
        strokeLinecap='square'
      />
      <path
        d='M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeMiterlimit='10'
        strokeLinecap='square'
      />
    </svg>
  )
}

type SearchInputProps = {
  placeholder?: string
  defaultValue?: string
  onChange?(value: string): void
}

const SearchInputInput = chakra('input', {
  base: {
    bg: 'gray.800',
    flex: '1',
    rounded: 'lg',
    height: '48px',
    paddingLeft: '6',
    paddingRight: '16',
    fontSize: 'lg',
    fontFamily: 'heading',
    _placeholder: {
      color: 'gray.500',
    },
  },
})

const SearchInputButton = chakra('button', {
  base: {
    boxSize: '32px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    rounded: 'md',
    color: 'white',
    _hover: {
      bg: 'whiteAlpha.300',
    },
  },
})

export default function SearchInput(props: SearchInputProps) {
  const { placeholder = 'Search articles', onChange, defaultValue } = props

  const ref = useRef<HTMLInputElement>(null)
  const [setInputRef, inputStatus] = useElementState()
  const [setButtonRef, buttonStatus] = useElementState()
  const params = useSearchParams()

  const hasValue = params.searchString.length > 0
  const isInteracting = ['hover', 'focus'].includes(inputStatus) || buttonStatus === 'hover'
  const showClear = hasValue && isInteracting

  return (
    <Flex position='relative' role='search'>
      <SearchInputInput
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={(event) => {
          onChange(event.target.value)
        }}
        type='search'
        ref={mergeRefs(setInputRef, ref)}
        id='query'
        name='q'
      />
      <AbsoluteCenter axis='vertical' right='16'>
        <SearchInputButton
          ref={setButtonRef}
          hidden={!showClear}
          tabIndex={-1}
          type='button'
          aria-controls='query'
          onPointerDown={(event) => {
            event.preventDefault()
          }}
          onClick={() => {
            const el = ref.current
            el.value = ''
            onChange?.('')
            setTimeout(() => {
              el.focus()
            })
          }}
        >
          <Icon fontSize='lg'>
            <CloseIcon />
          </Icon>
        </SearchInputButton>
      </AbsoluteCenter>
      <AbsoluteCenter axis='vertical' pointerEvents='none' right='5' color='gray.500'>
        <SearchIcon />
      </AbsoluteCenter>
    </Flex>
  )
}
