import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface MylibProps {}

const StyledMylib = styled.div`
  color: pink;
`;

const getSomeText = (capitalized?: boolean) => {
  if (!capitalized) {
    return 'some text';
  }
  // return undefined;
  // Depending on the tsconfig, we may get an error here: `TS7030: Not all code paths return a value.`
};

export function Mylib(props: MylibProps) {
  return (
    <StyledMylib>
      <p>
        Here is some text: <code>{getSomeText()}</code>
      </p>
      <h1>Welcome to Mylib!</h1>
    </StyledMylib>
  );
}

export default Mylib;
