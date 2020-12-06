import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Layout, LayoutItem } from '@andwoo/scss-grid';


const Text = styled.p`
  margin-right: 2rem;
  display: inline-block;
`;
const Input = styled.input`
  width: 100%;
  border-style: none;
  background-color: #f7f7f7;
  border-radius: 5px;
  padding: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
`;

const OptionInput = ({initialValue, placeholder, label, onChange}: {initialValue: string, placeholder: string, label: string, onChange: (value: string) => void }): JSX.Element => {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    onChange(value);
  }, [value]);
  return (
    <label>
      <Layout>
        <LayoutItem size='one-fifth' style={{alignSelf: 'center'}}>
          <Text>{label}</Text>
        </LayoutItem>
        <LayoutItem size='four-fifths'>
          <Input type="text" value={value} placeholder={placeholder} onChange={(event): void => setValue(event.target.value)} />
        </LayoutItem>
      </Layout>
    </label>

  )
}
export default OptionInput
