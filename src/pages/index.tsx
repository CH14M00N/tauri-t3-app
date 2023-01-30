import { type NextPage } from 'next';
import { open } from '@tauri-apps/api/shell';
import Link from 'next/link';
import styled from '@emotion/styled';

const StyledIndexPage = styled.main(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '.grid': {
    display: 'flex',
    padding: '1rem',
    gridGap: '1rem',
  },
}));

const Index: NextPage = () => {
  return (
    <StyledIndexPage>
      <h1>Tauri T3 App</h1>
      <div className="grid">
        <button
          onClick={() => {
            open('https://tauri.app');
          }}
        >
          <h3>Tauri Docs</h3>
        </button>
        <button
          onClick={() => {
            open('https://create.t3.gg/en/introduction');
          }}
        >
          <h3>T3 Docs</h3>
        </button>
      </div>
      <Link href="https://tauri-t3-app.vercel.app/home">Start App</Link>
    </StyledIndexPage>
  );
};

export default Index;
