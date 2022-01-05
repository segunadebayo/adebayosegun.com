import fetcher from 'lib/fetcher';
import { useRef, useState } from 'react';
import useSWR from 'swr';

export function useSubscribeForm() {
  const [state, setState] = useState('idle');
  const [message, setMessage] = useState('');

  const { data } = useSWR<{ count: number }>('/api/subscribers', fetcher);
  const inputRef = useRef<HTMLInputElement>(null);

  async function submit() {
    setState('loading');

    const response = await fetch('/api/subscribe', {
      body: JSON.stringify({ email: inputRef.current.value }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });

    const { error } = await response.json();

    if (!response.ok) {
      setMessage(error);
      setState('error');
    } else {
      inputRef.current.value = '';
      setState('success');
      setMessage('Thanks for subscribing!');
    }
  }

  return {
    state,
    message,
    inputRef,
    data,
    submit,
    hasError: state === 'error',
  };
}
